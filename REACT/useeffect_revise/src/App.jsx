import axios from "axios";
import React, { useEffect, useState } from 'react'

export default function App() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false);
      const [error
        , seterror] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                setloading(true);
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                const data = res.data;
                setdata(data);
                setloading(false)
                
            } catch (error) {
                seterror(error.message);
                setloading(false);
                
            }
           
        }
         getData();
    }, []);
    
  


  return (
      <div>
          {loading && <h1>loading.....</h1>}
          {error && <h1>error.....</h1>}
          {
              data.map((elem, index) => <h1 key={index}>{elem.username}</h1>
                  
              )
          }
    </div>
  )
}
