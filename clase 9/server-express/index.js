import express from "express";

const app = express();

app.get("/", (req,resp)=>{
    resp.send("hola express");
});

app.post("/", (req,resp)=>{
    resp.send("hola express");
});
const PORT=3000;
app.listen(PORT, () =>console.log(`http://localhost:${PORT}`));
