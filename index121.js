const { log } = require("node:console");
const { loadavg } = require("node:os");

let number = [23, 45, 67, 89, 90];
const greaterthan85 = number.map((num) => {
    return num >= 85;
});
console.log(greaterthan85);
