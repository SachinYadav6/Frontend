function App() {

    localStorage.clear();

    localStorage.setItem("user", "sachin kumar");

    console.log(localStorage.getItem("user"));

    localStorage.setItem("age", 18);

    console.log(localStorage.getItem("age"));
    /* remove item local stroage*/ 
    localStorage.removeItem("age");
    /* get item*/ 
    console.log(localStorage.getItem("age"));
    /* appliction ke data save krne ka tarika */ 
    const user = {
        username: 'ram krishna',
        age: 18,
        city: 'bhopal',
        
    }
    localStorage.setItem('user', JSON.stringify(user));
    const storedUser= JSON.parse(localStorage.getItem('user'));

console.log(storedUser);


    return (
        <div>
            <h1>Local Storage</h1>
            <p>User: {storedUser.username}</p>
            <p>City: {storedUser.city}</p>
        </div>
    )
}
export default App;
