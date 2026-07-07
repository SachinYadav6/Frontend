let promiseOne = new Promise((resolve, reject) => {

    resolve([34, 56, 89, 90, 54, 65]);
    
});
promiseOne.then((arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i} and index of number : ${arr[i]}`);
        
    
    }
});
