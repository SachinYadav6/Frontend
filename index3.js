function savedata(data) {
    return new Promise((resolve, reject) => {
        let speedinternet = Math.floor(Math.random() * 10) + 1;
        if (speedinternet > 4) {
            resolve('success: data was saved.')
        } else {
            reject('failure:data was not saved.')
        }
        
    })
}
let datasaved = savedata('APNA COLLEGE');
 console.log(datasaved);
 
