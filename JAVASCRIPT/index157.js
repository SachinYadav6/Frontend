const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data successfully mil gaya");
    } else {
        reject("Error aa gaya");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });