import { filterData } from '../src/dataFunctions.js';
import { data } from './data.js';

describe('filterData', () => {
  it('se filtra data por streamingPlatform', () => {
    const filteredData = filterData(data, 'streamingPlatform', 'Netflix');
    expect(filteredData.length).toBe(2); // Esperamos 2 resultados
    expect(filteredData[0].id).toBe('stranger-things'); // Verificamos el ID del primer elemento
    expect(filteredData[1].id).toBe('black-mirror'); // Verificamos el ID del segundo elemento
  });

  it('se devuelve un array vacío si no hay data que coincida', () => {
    const filteredData = filterData(data, 'streamingPlatform', 'Star+');
    expect(filteredData.length).toBe(0); // Esperamos 0 resultados
  });
});
