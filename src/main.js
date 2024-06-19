//Aquí va: import { example } from './dataFunctions.js';
import { renderItems } from './view.js'; //faltaba la extensión .js
import data from './data/dataset.js'; //faltaba la extensión .js
 
const rootElement = document.getElementById('root');

rootElement.append(renderItems(data)); //esto permite se conecte todo :)