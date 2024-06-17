
const Series = document.getElementById('dataContainer');

export const renderItems = (data) => { // Función flecha
  data.forEach(Item  => {

    const liElement = document.createElement('li');
    const content = `
      <h2>${Item.name}</h2>
      <img src="${Item.imageUrl}" alt="${Item.name}">
      <p>${Item.shortDescription}</p>
      <p>${Item.facts.streamingPlatform}</p>

    `;
    liElement.innerHTML = content;

    Series.appendChild(liElement);

  });
}

