// const numeros =[1,2,3];
// const letras =["a","c","e"];

// // const array = numeros.concat(letras);--- 1ra forma de concat.--
// const array =[...numeros, ...letras]
// //             1,2,3,"a","c","e"
//  console.log(array);
//-----objetos
const antiguoProductos = {
    id: 1,
    nombre: "producto 1",
    precio: 100
};

const nuevoProducto = {
    precio: 120,
    descripcion: "Un producto"
};
 
const producto ={...antiguoProductos, ...nuevoProducto};
//console.log(producto);
nuevoProducto.precio =140;
const copia= {...antiguoProductos};
console.log(copia);