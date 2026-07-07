let promiseOne = new Promise((resolve, reject) => {
    resolve({ name: 'sachin kumar', gmail: 'ksachin1213Agmail.com', college: 'MITS' })
    
});

promiseOne.then((user) => {
    console.log(user);
    
});
