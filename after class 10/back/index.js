import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

const products = [
    {id: 1 ,name: "producto 1",precio: 100},
    {id: 2 ,name: "producto 2",precio: 200},
    {id: 3 ,name: "producto 3",precio: 300},
];

app.get("/products", (req,res) => {
    res.json(products);
});

app.post("/products" , (req,res) => {
   // console.log(req.body.name);
   const {name,precio} = req.body;
   const product ={
//id:products.length + 1,
    id:Math.max(...products.map((p)=>p.id)) + 1,
    name,
    precio,
   };
   products.push(product);
   res.status(201).json(product);
    
});
app.use((req,res,next) =>{
    res.status(404).json({error: "Not Found"});
});


const PORT = 3000 ;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
