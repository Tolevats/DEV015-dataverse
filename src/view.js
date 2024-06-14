export const renderItems = (data) => { 

  const ulElement = document.createElement('ul');

  data.forEach((item, index) => {  //iteramos sobre la data
    console.log(index, item);  

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    console.log("Elemento <ul> creado:", ulElement);  

  });

  return ulElement;  
};
// una funcion para que se despliegue los renders en el DOM 
document.addEventListener('DOMContentLoaded',function() {
  const container =document.querySelector(root);
  const ulElement = renderItems(data);
  container.appendChild(ulElement);
  console.log(ulElement);

});


}
