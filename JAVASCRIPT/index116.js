const promisethree = new Promise(function (resolve, reject) {
     resolve({ username: 'sachin kumar' });
    reject('data  fail')

})
promisethree.then((user) => {

    return user.username;

    
})
    .then((username) => {
        console.log(username);
    
    })
    .catch((error) => {
        console.log('something wrong');
    
    })
    .finally(() => {
        console.log('promisse was either resolve or reject');
    
    });
