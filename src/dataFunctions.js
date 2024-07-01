//Función para filtrar data
export const filterData = (data, filterBy, value) => {
  // console.log(`Filter by: ${filterBy}, Value: ${value}`);
  return data.filter(item => item.facts[filterBy] === value); //especificar la propiedad facts para filtrar con lo que coincida con valor
};

//Función para ordenar data por propiedad y orden específico
export const sortData = (data, sortBy, sortOrder) => {
  // Filtrar los datos para asegurarse de que cada elemento tiene la propiedad 'facts' y la clave 'sortBy'
  const filteredData = data.filter(item => item.facts && item.facts[sortBy] !== undefined);

  // Utilizar map para crear un nuevo array con los valores de sortBy en cada objeto
  const mappedData = filteredData.map(item => ({
    ...item,
    sortByValue: item.facts[sortBy]
  }));

  // Utilizar reduce para ordenar los datos de acuerdo con sortByValue y sortOrder
  const sortedData = mappedData.reduce((acc, item) => {
    // Insertar cada elemento en la posición correcta en el array acumulador
    let insertIndex = acc.findIndex(accItem => {
      if (sortOrder === 'asc') {
        return item.sortByValue < accItem.sortByValue;
      } else {
        return item.sortByValue > accItem.sortByValue;
      }
    });
    if (insertIndex === -1) {
      insertIndex = acc.length;
    }
    acc.splice(insertIndex, 0, item);
    return acc;
  }, []);

  // Eliminar la propiedad sortByValue antes de devolver los datos ordenados
  return sortedData.map(item => {
    const { sortByValue, ...rest } = item; // eslint-disable-line no-unused-vars
    return rest;
  });
};

//Funciones para cálculos estadísticos
export const computeStats = (data) => {
  //Promedio de años de transmisión de series
  const totalYears = data.reduce((acc, item) => {
    const startYear = parseInt(item.facts.yearOfRelease);
    const endYear = parseInt(item.facts.yearOfEnd);
    
    // Verifica que ambos años sean números válidos
    if (!isNaN(startYear) && !isNaN(endYear)) {
      return acc + (endYear - startYear + 1); // +1 para incluir el año de inicio
    }
    return acc;
  }, 0);
  
  const avgYears = totalYears / data.length;

  //Cantidad promedio de series por país
  const countryCount = data.reduce((acc, item) => {
    const country = item.facts.country;
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});
  const avgSeriesByCountry = Object.entries(countryCount).reduce((acc, [country, count]) => {
    acc[country] = count / data.length;
    return acc;
  }, {});

  console.log('Promedio de años de transmisión:', avgYears);
  console.log('Cantidad promedio de series por país:', avgSeriesByCountry);

  return {
    avgYears,
    avgSeriesByCountry,
  };
};
