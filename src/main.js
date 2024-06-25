import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

//selector DOM
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const platformSelect = document.getElementById('platform');
  const sortBySelect = document.getElementById('sortBy');
  const sortOrderRadios = document.getElementsByName('sort-order');
  const buttonReset = document.getElementById('buttonClear');

  const getSortOrder = () => {
    const selectedOrder = Array.from(sortOrderRadios).find(radio => radio.checked);
    return selectedOrder ? selectedOrder.value : 'asc';
  };

  const renderFilteredData = () => {
    const platform = platformSelect.value;
    const sortBy = sortBySelect.value;
    const sortOrder = getSortOrder();

    let filteredData = data;

    if (platform) {
      filteredData = filterData(filteredData, 'streamingPlatform', platform);
    }

    if (sortBy) {
      filteredData = sortData(filteredData, sortBy, sortOrder);
    }

    rootElement.innerHTML = ''; // Limpiar el contenido previo
    rootElement.append(renderItems(filteredData));
  };

  //Manejador de eventos
  platformSelect.addEventListener('change', renderFilteredData);
  sortBySelect.addEventListener('change', renderFilteredData);
  Array.from(sortOrderRadios).forEach(radio => radio.addEventListener('change', renderFilteredData));

  buttonReset.addEventListener('click', () => {
    platformSelect.selectedIndex = 0;
    sortBySelect.selectedIndex = 0;
    rootElement.innerHTML = ''
    rootElement.append(renderItems(data));
  });

  rootElement.append(renderItems(data)); //Render inicial
});