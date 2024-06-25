//Función para filtrar data
export const filterData = (data, filterBy, value) => {
  // console.log(`Filter by: ${filterBy}, Value: ${value}`);
  return data.filter(item => item.facts[filterBy] === value); //especificar la propiedad facts para filtrar
};

//Función para ordenar data
/* export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.facts[sortBy] > b.facts[sortBy] ? 1 : -1;
    } else {
      return a.facts[sortBy] < b.facts[sortBy] ? 1 : -1;
    }
  });
}; */

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (a.facts[sortBy] < b.facts[sortBy]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a.facts[sortBy] > b.facts[sortBy]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
};