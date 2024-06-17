export const renderItems = (data) => { 
  // console.log(data)
/*   document.getElementById('dataContainer');
  const container = document.getElementById('dataContainer'); */
  const ulElement = document.createElement('ul'); //creamos un elemento ul

  data.forEach(serie => {  //iteramos sobre la data. item=serie
    // console.log(serie);  

    const liSeries = document.createElement('li'); //creamos li para cada serie
    liSeries.setAttribute('class', 'card') //lo que nos permitirá estilizar tarjetas
    liSeries.setAttribute('itemscope','')
    liSeries.setAttribute('itemtype', serie.id)
    liSeries.innerHTML = `
    <dl itemscope itemtype ='sfSeries'>
    <img src='${serie.imageUrl}' alt='${serie.name}'/>
    <dd itemprop='name'>${serie.name}</dd>
    <dd itemprop='shortDescription'>${serie.shortDescription}</dd>
    <dd itemprop='streamingPlatform'>${serie.streamingPlatform}</dd>
    </dl>
    `

    ulElement.appendChild(liSeries); //añade li en ul


  });

  return ulElement;  
};