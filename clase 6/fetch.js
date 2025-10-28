
// fetch('https://fakestoreapi.com/products')
//  .then((resp) => resp.json())
//  .then((data) => console.log(data))
//  .catch((error) => console.error(error));
//--------------

fetch('https://fakestoreapi.com/products')
 .then((resp) => resp.json())
 .then((data) => console.log(data))
 .catch((error) => console.error(error));
 
 //.finally(() => console.log("siempre se ejecuta"));-----finaliza una tarea 
 