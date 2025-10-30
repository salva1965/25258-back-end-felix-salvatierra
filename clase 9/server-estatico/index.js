//console.log(__dirname);

import express from "express";

// import {join,dirname} from "path";
// import { fileURLToPath } from "url";
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=dirname(__filename);



const app = express();
app.get("/foto", (req,resp)=>{
    resp.sendFile(process.cwd() + "/blog-2.jpg")
});
console.log(process.cwd());
//app.use(express.static("public")); --ruta relativa
//app.use(express.static(join(__dirname,"public"))); --ruta absoluta
// app.get("/", (req,resp)=>{
//     resp.sendFile(join(__dirname, "cama_blanca.JPG"));
// });

// app.post("/", (req,resp)=>{
//     resp.send("hola   -post");
// });
const PORT=3000;
app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));
