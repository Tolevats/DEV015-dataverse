export const renderItems = (data) => {
  // console.log('Rendering items:', data);
  const ulElement = document.createElement('ul');

  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute('itemscope', ''); //Indica que el elemento y su contenido representan una entidad específica
    liElement.setAttribute('itemtype', 'http://schema.org/TVSeries'); //Especifica el tipo de entidad (una serie de televisión)

    liElement.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" itemprop="image">
      <h3 itemprop="name"><strong>${item.name}</strong></h3>
      <h4 itemprop="containsSeason">${item.facts.streamingPlatform}</h4>
      <p itemprop="description">${item.shortDescription}</p>
      <p itemprop="year">${item.facts.yearOfRelease} - ${item.facts.yearOfEnd}</p>
      <p itemprop="rating">${item.facts.averageRating}</p>
      <button class="info-button" itemprop="action" onclick="handleButtonClick('${item.id}')">Más información</button>

    `;
    liElement.classList.add('item-style'); 

    ulElement.appendChild(liElement);
  });

  return ulElement; 
};