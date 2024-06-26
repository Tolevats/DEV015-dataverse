//Función para filtrar data
export const filterData = (data, filterBy, value) => {
  // console.log(`Filter by: ${filterBy}, Value: ${value}`);
  return data.filter(item => item.facts[filterBy] === value); //especificar la propiedad facts para filtrar con lo que coincida con valor
};

//Función para ordenar data por propiedad y orden específico
export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => { //llamar método sort en array data comparando los 2 elementos en cada iteración
    if (a.facts[sortBy] < b.facts[sortBy]) { //compara valores de sortBy en facts de cada elemento (objeto a y b)
      if (sortOrder === 'asc') { //comprobar si sortOrder es igual a 'asc'
        return -1; //indicar que debe ir antes que b
      } else {
        return 1; //indicar que debe ir después que b
      }
    }
    if (a.facts[sortBy] > b.facts[sortBy]) {
      if (sortOrder === 'asc') {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  });
};