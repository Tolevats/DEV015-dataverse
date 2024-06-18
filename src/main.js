import { renderItems } from './view'; 
import { obtenerDatos } from './data/dataset';
document.addEventListener('DOMContentLoaded', () => {
  const data = obtenerDatos(); 
  const rootElement = document.getElementById('root'); 
  const itemsElement = renderItems(data);
  rootElement.appendChild(itemsElement); 
});
