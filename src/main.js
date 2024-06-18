import { renderItems } from './view'; // Importar la función renderItems desde tu archivo view.js

document.addEventListener('DOMContentLoaded', () => {
  const data = obtenerDatos(); // Aquí obtienes tus datos de alguna manera, por ejemplo desde una API o archivo

  const rootElement = document.getElementById('root'); // Obtener el elemento raíz donde se va a renderizar el contenido

  const itemsElement = renderItems(data);
  rootElement.appendChild(itemsElement); 
});
