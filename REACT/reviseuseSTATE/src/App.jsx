import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data[0].url);
      });
  }, []);

  return (
    <div>
      <img 
        src={users} 
        alt="cat" 
        width="400px" 
      />
    </div>
  );
}

export default App;