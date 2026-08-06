async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();

    const timer = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timer);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request Timeout");
        }

        throw error;
    }
}


async function getUserData() {

    try {

        const [users, posts, comments] = await Promise.all([
            fetchWithTimeout(
                "https://jsonplaceholder.typicode.com/users"
            ),

            fetchWithTimeout(
                "https://jsonplaceholder.typicode.com/posts"
            ),

            fetchWithTimeout(
                "https://jsonplaceholder.typicode.com/comments"
            )
        ]);


        console.log("Users:", users);
        console.log("Posts:", posts);
        console.log("Comments:", comments);


        const userPostCount = users.map(user => {

            const totalPosts = posts.filter(
                post => post.userId === user.id
            ).length;

            return {
                name: user.name,
                email: user.email,
                posts: totalPosts
            };
        });


        console.log("User Report:", userPostCount);


    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("API Request Completed");

    }
}


getUserData();