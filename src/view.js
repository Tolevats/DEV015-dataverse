export const renderItems = (data) => {
  const ulElement = document.createElement('ul');

  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <h3 style="text-align: center;"><strong>${item.name}</strong></h3>
      <h4>${item.facts.streamingPlatform}</h4>
      <p>${item.shortDescription}</p>
    `;
    liElement.classList.add('item-style'); 

    ulElement.appendChild(liElement);
  });

  return ulElement; 
}
