/* callback  hell*/ 
setTimeout(function () {
    console.log("Step 1: Data fetch");

    setTimeout(function () {
        console.log("Step 2: Data process");

        setTimeout(function () {
            console.log("Step 3: Data save");

            setTimeout(function () {
                console.log("Step 4: Done ");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
