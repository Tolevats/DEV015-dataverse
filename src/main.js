import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

//selector DOM
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const platformSelect = document.getElementById('platform');
  // const yearSelect = document.getElementById('filterYear');
  // const sortSelect = document.getElementById('sorting');
  const buttonReset = document.getElementById('buttonClear');

  const renderFilteredData = () => {
    let filteredData = data;

    const platform = platformSelect.value;
    //const year = yearSelect.value;
    // const sort = sortSelect.value;

    if (platform) {
      filteredData = filterData(filteredData, 'streamingPlatform', platform);
      // console.log(filteredData);
    }

    /*     if (year) {
      const [filterBy, order] = year.split(' ');
      filteredData = filterData(filteredData, filterBy, order);
    } */

    /*     if (sort) {
      const [sortBy, order] = sort.split(' ');
      filteredData = filterData(filteredData, sortBy, order);
    } */

    rootElement.innerHTML = ''; // Limpiar el contenido previo
    rootElement.append(renderItems(filteredData));
  };

  //Manejador de eventos
  platformSelect.addEventListener('change', renderFilteredData);
  //yearSelect.addEventListener('change', renderFilteredData);
  // sortSelect.addEventListener('change', renderFilteredData);

  buttonReset.addEventListener('click', () => {
    platformSelect.selectedIndex = 0;
    //yearSelect.selectedIndex = 0;
    //sortSelect.selectedIndex = 0;
    rootElement.innerHTML = ''
    rootElement.append(renderItems(data));
  });

  rootElement.append(renderItems(data)); //Render inicial
});