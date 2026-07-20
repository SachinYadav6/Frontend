function greeting(message) {

    return function (name) {

        console.log(message + " " + name);

    };

}

const hello = greeting("Hello");

hello("Sachin");

hello("Rahul");