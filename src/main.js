import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

//selector DOM
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  const platformSelect = document.querySelector('#platform');
  const sortBySelect = document.querySelector('#sortBy');
  const buttonReset = document.querySelector('#buttonClear');
  const buttonStats = document.querySelector('#buttonStats');

  //función para renderizar datos filtrados y ordenados
  const renderFilteredData = () => {
    const platform = platformSelect.value;
    const sortByOption = sortBySelect.value.split('-');
    const sortBy = sortByOption[0];
    const sortOrder = sortByOption[1];

    let filteredData = data;

    if (platform) { //filtra por plataforma si está seleccionada
      filteredData = filterData(filteredData, 'streamingPlatform', platform);
    }

    if (sortBy && sortOrder) { //ordena los datos si se ha seleccionado una opción de ordenar
      filteredData = sortData(filteredData, sortBy, sortOrder);
    }

    rootElement.innerHTML = ''; //limpia el contenido previo
    rootElement.appendChild(renderItems(filteredData));
  };

  //Manejador de eventos para actualizar vista cuando sucedan los filtros/orden
  platformSelect.addEventListener('change', renderFilteredData);
  sortBySelect.addEventListener('change', renderFilteredData);
  
  //Botón para limpiar datos seleccionados
  buttonReset.addEventListener('click', () => {
    platformSelect.selectedIndex = 0;
    sortBySelect.selectedIndex = 0;
    rootElement.innerHTML = ''
    rootElement.append(renderItems(data));
  });

  //Botón para mostrar estadísticas
  buttonStats.addEventListener('click', () => {
    const stats = computeStats(data);
    
    const resultsContainer = document.querySelector('#results');
    resultsContainer.innerHTML = `
      <h4>${stats.avgYears.toFixed(2)} años es el promedio de transmisión</h4>
      <h4>Promedio de series por país:</h4>
      <ul>
        ${Object.entries(stats.avgSeriesByCountry).map(([country, avg]) => `<li>${country}: ${avg.toFixed(2)}</li>`).join('')}
      </ul>
    `;
  });

  rootElement.appendChild(renderItems(data)); //Render inicial
});