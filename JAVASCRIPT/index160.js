async function getData() {

    try {
        const usersResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const postsResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log("Users:", users);
        console.log("Posts:", posts);

    } catch (error) {
        console.log(error);
    }
}

getData();