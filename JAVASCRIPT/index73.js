function basicPromiseExample() {
    return new Promise((resolve, reject) => {
        let internet = true;

        if (internet) {
            resolve("Data fetched successfully ✅");
        } else {
            reject("No internet connection ❌");
        }
    });
}

module.exports = basicPromiseExample;
