const os = require('os');
// const freeMemory = os.freemem();
// console.log(freeMemory);
// console.log(`Free memory: ${(freeMemory / 1024 ** 3).toFixed(2)} GB`);

// console.log(os.homedir());   // User ka home folder
// console.log(os.hostname());  // Computer ka naam
// console.log(os.userInfo());  // Current user information
// console.log(os.totalmem());  // Total RAM



// const uptime = os.uptime();

// console.log(`Uptime: ${uptime} seconds`);
// console.log(`Uptime: ${(uptime / 60).toFixed(2)} minutes`);
// console.log(`Uptime: ${(uptime / 3600).toFixed(2)} hours`);
// console.log(`Uptime: ${(uptime / 86400).toFixed(2)} days`);


console.log(os.type());
console.log(os.platform());