// function tasKAsync(callback) {
//     setTimeout(() => {
//         callback();
//     },2000)
// }

// function avisame() {
//     console.log("fin");
// }
// console.log("10");
// tasKAsync(avisame);
// console.log("12");

//---------
const fs = require("fs");
console.log("16");
const data =fs.readFile("./data.txt","utf-8",(err,data) => {
    console.log(err);
    console.log(data);
});
console.log("20");
