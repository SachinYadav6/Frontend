function App() {
  /* Clear all Local Storage data */
  localStorage.clear();

  /* Clear all Session Storage data */
  sessionStorage.clear();

  /* Store a string in Local Storage */
  localStorage.setItem("user", "sachin");

  /* Retrieve the stored string */
  const getUser = localStorage.getItem("user");
  console.log(getUser);

  /* Create an object */
  const user = {
    username: "sonu kumar",
    city: "bhopal",
    id: 101,
    age: 23,
  };

  /* Convert object to JSON string and store it */
  localStorage.setItem("user", JSON.stringify(user));

  /* Retrieve JSON string and convert it back to an object */
  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData);

  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  );
}

export default App;