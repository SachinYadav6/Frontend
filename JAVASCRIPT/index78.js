function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                id: 1,
                name: "Sachin",
                city: "Delhi"
            };

            resolve(user); // JSON data success
        }, 1000);
    });
}

getUser()
    .then((data) => {
        console.log("User data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
