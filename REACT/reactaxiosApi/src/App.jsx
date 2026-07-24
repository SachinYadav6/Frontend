import axios from "axios";

function App() {

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Users</button>
    </div>
  );
}

export default App;