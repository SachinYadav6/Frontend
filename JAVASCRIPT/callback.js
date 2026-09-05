function calculate(a, b, callback) {
    let result = a + b;
    console.log(result);
    
}
calculate(2, 3, function (result) {
    console.log(result);
    
});
/*calback hell color change */
/* 
let heading = document.querySelector("h1");
console.log(heading.innerText);
heading.style.color = "red";

*/

/*

function colorchange(color, calback) {
    let heading = document.querySelector("h1");
    heading.style.color = color;
    calback(heading)
}
colorchange('red', function (heading) {
    heading.style.color = 'green';
})

*/
/* callback hell*/
/*

function colorchange(color, callback) {
    let heading = document.querySelector("h1");

    heading.style.color = color;

    callback(heading);
}

colorchange("red", function (heading) {

    heading.style.color = "green";

    colorchange("blue", function (heading) {

        heading.style.color = "blue";

        colorchange("yellow", function (heading) {

            heading.style.color = "yellow";

            colorchange("pink", function (heading) {

                heading.style.color = "pink";

            });

        });

    });

});

*/
/* nesting color change callback hell*/ 

function colorchange(color, callback) {
    setTimeout(() => {

        let heading = document.querySelector("h1");
        heading.style.color = color;

        callback(heading);

    }, 1000);
}

colorchange("red", function (heading) {

    heading.style.color = "green";

    colorchange("blue", function (heading) {

        heading.style.color = "blue";

        colorchange("yellow", function (heading) {

            heading.style.color = "yellow";

            colorchange("pink", function (heading) {

                heading.style.color = "pink";

            });

        });

    });

});
