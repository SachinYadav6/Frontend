import { useState } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);

  
   async function getData() {
     const response = await fetch("https://dummyjson.com/products?limit=90");
    
     
     const data = await response.json();
      console.log(data);
     console.log(Array.isArray(data));
       setData(data.products)
      
   }
  

  return (
    <div>
      <div className="container" >
        {
          data.map((elem,idx) => (
            <Card
              key={elem.id}
             img={elem.thumbnail}
  title={elem.title}
            />
          ))
          

        }
      </div>
      <button
        onClick={getData}
      >getdata</button>
    </div>
  )
}
export default App;


















