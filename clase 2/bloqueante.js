const fs = require("fs");
console.log("A");
const data = fs.readFileSync("./text.txt", "utf8");
console.log(data);
console.log("B (recien despues de leer tod)");
