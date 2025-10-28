const autos =[
    {marca:"ford",modelo:"fiesta",año:2010,color:"Rojo"},
    {marca:"Chevrolet",modelo:"Onix",año:2018,color:"Azul"},
    {marca:"Toyota",modelo:"Corolla",año:2020,color:"Blanco"},
    {marca:"Honda",modelo:"Civic",año:2019,color:"Negro"},
    {marca:"Volkswagen",modelo:"Golf",año:2017,color:"Gris"},
    {marca:"Nissan",modelo:"Versa",año:2021,color:"Verde"},
    {marca:"Hyundai",modelo:"Elantrs",año:2022,color:"Rojo"},
    {marca:"Kia",modelo:"Rio",año:2016,color:"Azul"},
    {marca:"Peugeot",modelo:"208",año:2015,color:"Blanco"},
    {marca:"Renault",modelo:"Sandero",año:2014,color:"Blanco"},
];

function contarPorColor(colorBuscado) {
   // let contador = 0;
    let cantidad = 0;
    // //autos.forEach(auto => {  ---- sin destructuracion ,toma todo el objeto. ----
    // autos.forEach(({color}) => {
    //   //  if(auto.color == colorBuscado) {  ----sin pasar a minusculs  ----
        
    //     if(color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()) {
    //         contador++;
    //     }
    // });
    // ------------- Usando Reduce -----------
    cantidad = autos.reduce( (contador,{color}) => {
    //     if(color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()) {
    //         contador++;
    //     }

    //     return contador;
     return  color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()  ? ++contador : contador;

     },0);

    console.log (`Hay ${cantidad} autos de color ${colorBuscado}`);
}

contarPorColor("azul");