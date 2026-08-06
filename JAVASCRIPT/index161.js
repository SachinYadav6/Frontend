async function createUser() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Rahul",
                    email: "rahul@gmail.com"
                })
            }
        );

        const data = await response.json();

        console.log("Created User:", data);

    } catch (error) {
        console.log(error);
    }
}

createUser();