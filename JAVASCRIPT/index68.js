/* settime out*/ 
let count = 1;

let intervalId = setInterval(function () {
    console.log("Count:", count);
    count++;

    if (count > 5) {
        clearInterval(intervalId); // interval band
        console.log("Interval stop ho gaya");
    }
}, 2000);
