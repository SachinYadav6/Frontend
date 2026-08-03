import { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);

  return <h2>Hello {user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Rahul">
      <div>
        <h1>CONTEXT API</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;