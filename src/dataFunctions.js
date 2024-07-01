// Función para filtrar data
export const filterData = (data, filterBy, value) => {
  // console.log(`Filter by: ${filterBy}, Value: ${value}`);
  return data.filter(item => item.facts[filterBy] === value); // Especificar la propiedad facts para filtrar con lo que coincida con valor
};

// Función para ordenar data por propiedad y orden específico
export const sortData = (data, sortBy, sortOrder) => {
  let sortedData;

  if (sortBy === 'name') {
    sortedData = data.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name); // Orden ascendente por nombre
      } else {
        return b.name.localeCompare(a.name); // Orden descendente por nombre
      }
    });
  } else if (sortBy === 'id') {
    sortedData = data.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id.localeCompare(b.id); // Orden ascendente por id
      } else {
        return b.id.localeCompare(a.id); // Orden descendente por id
      }
    });
  } else {
  
    const filteredData = data.filter(item => item.facts && item.facts[sortBy] !== undefined);
    const mappedData = filteredData.map(item => ({
      ...item,
      sortByValue: item.facts[sortBy]
    }));

    sortedData = mappedData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.sortByValue - b.sortByValue; 
      } else {
        return b.sortByValue - a.sortByValue; 
      }
    });
  }

  // Devolver los datos ordenados
  return sortedData.map(({ sortByValue, ...rest }) => rest); // eslint-disable-line no-unused-vars

};
