const Series = document.getElementById('dataContainer');

export const renderItems = (data) => { // Función flecha
  data.forEach(Item  => {

    const liElement = document.createElement('li');
    
    liElement.classList.add('item-style'); //Para agregar clase a li

    const content = `
      <img src="${Item.imageUrl}" alt="${Item.name}">
      <h3><strong>${Item.name}</strong></h3>
      <h4>${Item.facts.streamingPlatform}</h4>
      <p>${Item.shortDescription}</p>

    `;
    liElement.innerHTML = content;

    Series.appendChild(liElement);

  });
}