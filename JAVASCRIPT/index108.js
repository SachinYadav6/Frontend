let promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
      console.log('async task completed');
        resolve();
  },1000)
})

promiseOne.then(() => {
    console.log('promise consumed');
    
});
