function tareaPesada( ms = 1500) {
    const fin = Date.now() + ms;
    while (Date.now() < fin ) {} ; // simula CPU intensiva
}

console.time("Pesado");
tareaPesada(1500);
console.timeEnd("Pesado");
console.log("Listo");
