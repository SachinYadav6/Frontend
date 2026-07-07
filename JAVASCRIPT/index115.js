const promisefive = new Promise(function (resolve, reject) {
    let error = false;
    if (!error) {
        resolve({ username: 'sachin kumar', password: '12334' })
    } else {
        reject('error:. js went wrong')
        
    }
});

async function consumedpromised() {
    try {
        const response = await promisefive;
        console.log(response);

    }
    catch (error) {
        console.log(error);

    }


}
consumedpromised()