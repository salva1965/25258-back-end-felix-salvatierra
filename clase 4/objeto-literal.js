// const user ={
//     name:"juan",
//     edad:33,
//     direccion:{
//         calle:"calle falsa",
//         numero:123
//     },
//     rol:["user","editor"],
// };
//console.log(JSON.stringify(user));--transforma a un string
//console.log(typeof user);--dice objet

//console.log(Object.keys(user).length);--cantidad de claves
// user.email ="x@x.com";--agrega propedades
// delete user.name;---quita propiedades
//console.log(user.edad);
//console.log(user["edad"]);
//-------
// -----metodo ---
// const user = {
//     name: "juan",
//     edad: 33,
//     saludo: function() {
//         console.log(`soy ${user.name} mi edad es ${user.edad}`);
//     }
// }
// user.saludo();
const usuario = {
    name :"juan",
    edad :33,
    //saludo : function() { --o tambien
    saludo() {
        console.log(`soy ${this.name} mi edad es ${this.edad}`);
    }
};
usuario.saludo();