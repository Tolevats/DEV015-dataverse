import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

//selector DOM
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  const platformSelect = document.querySelector('#platform');
  const sortSelect = document.querySelector('#sortBy');
  const buttonReset = document.querySelector('#buttonClear');
  
  let filteredData = data; //estado inicial data

  platformSelect.addEventListener('change', (e) => { //para obtener el objeto Event
    const filterValue = e.target.value; //para obtener el valor actual del elemento que disparó el evento
    filteredData = filterData(data, 'streamingPlatform', filterValue);
    const sortedData = sortData(filteredData, sortSelect.value.split('-')[0], sortSelect.value.split('-')[1]); //acceder a los elementos del array para obtener el sortBy y el sortOrder
    rootElement.innerHTML = '';
    rootElement.appendChild(renderItems(sortedData));
  });
  
  sortSelect.addEventListener('change', (e) => {
    const [sortBy, sortOrder] = e.target.value.split('-');
    const sortedData = sortData(filteredData, sortBy, sortOrder);
    rootElement.innerHTML = '';
    rootElement.appendChild(renderItems(sortedData));
  });
  
  buttonReset.addEventListener('click', () => {
    platformSelect.value = '';
    sortSelect.value = '';
    // filteredData = data;
    rootElement.innerHTML = '';
    rootElement.appendChild(renderItems(data));
  });
  
  // Renderización inicial
  rootElement.appendChild(renderItems(data));
});
