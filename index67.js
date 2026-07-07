console.log("Program start");

let id = setInterval(() => {
    console.log("Running...");
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log("Interval stop after 5 seconds");
}, 5000);
/* setinterval*/ 