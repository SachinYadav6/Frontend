fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response);
        return response.json();//converting json format data

    
    })
    .then((data) => {
        console.log(data);
        
        console.log(data[0].email);
        
        console.log(data[0].name);
        
    })
    .catch((error) => {
        console.log(error);
    
    });
