const fs = require("fs");

console.log("A: inicio");

fs.readFile("./text.txt", "utf8", (err,data) => {
    console.log("C: listo el archivo (callback)");
});

console.log("B: sigo con otras cosas");
