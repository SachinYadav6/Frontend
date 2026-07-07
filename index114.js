// define async
async function getalluser() {
    try {
        const response = await  fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        

    }
    catch (error) {
        console.log(`error is:${error}`);
        
    }

}
getalluser();