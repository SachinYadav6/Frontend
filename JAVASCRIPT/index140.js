function bankAccount() {

    let balance = 5000;

    return function () {

        console.log(balance);

    };

}

const account = bankAccount();

account();