function User(username, logincount, isloggedin) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    
}
let username = new User('sachin kumar', 12, false);
console.log(username);

let userTwo = new  User('sonu kumar', 13, true);
console.log(userTwo);

