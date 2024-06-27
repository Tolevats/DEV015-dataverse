//Función para filtrar data
export const filterData = (data, filterBy, value) => {
  // console.log(`Filter by: ${filterBy}, Value: ${value}`);
  return data.filter(item => item.facts[filterBy] === value); //especificar la propiedad facts para filtrar con lo que coincida con valor
};

//Función para ordenar data por propiedad y orden específico
export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => { //llamar método sort en array data comparando los 2 elementos en cada iteración
    // Determinar el valor de comparación para el objeto 'a'
    let valueA = a[sortBy] !== undefined ? a[sortBy] : a.facts[sortBy];
    // Determinar el valor de comparación para el objeto 'b'
    let valueB = b[sortBy] !== undefined ? b[sortBy] : b.facts[sortBy];

    // Compara los valores para determinar el orden
    if (valueA < valueB) {
      // Si el orden es ascendente, 'a' va antes que 'b'
      if (sortOrder === 'asc') {
        return -1;
      } else {
        // Si el orden es descendente, 'a' va después que 'b'
        return 1;
      }
    }
    if (valueA > valueB) {
      // Si el orden es ascendente, 'a' va después que 'b'
      if (sortOrder === 'asc') {
        return 1;
      } else {
        // Si el orden es descendente, 'a' va antes que 'b'
        return -1;
      }
    }
    // Si los valores son iguales, no cambia el orden
    return 0;
  });
};
