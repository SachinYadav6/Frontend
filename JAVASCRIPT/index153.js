const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data mil gaya");
    } else {
        reject("Error aa gaya");
    }
});
console.log(promise);
