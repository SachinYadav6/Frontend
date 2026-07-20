function outer() {

    let name = "Sachin";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();

result();