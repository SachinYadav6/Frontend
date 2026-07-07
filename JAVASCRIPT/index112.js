// object literal define

const user = {
    username: 'sachin kumar',
    logedincount: 8,
    signedin: true,
    getuserdetails:function () {
        console.log(this.logedincount);
        console.log(this.signedin);
        console.log(this.username);
        console.log(this);
        
        
        
        
        
    }
}
console.log(user);
console.log(user.getuserdetails());

