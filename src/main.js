import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

//selector DOM
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  const platformSelect = document.querySelector('#platform');
  const sortBySelect = document.querySelector('#sortBy');
  const buttonReset = document.querySelector('#buttonClear');

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

  rootElement.appendChild(renderItems(data)); //Render inicial
});