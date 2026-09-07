import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const res =await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setdata(data.products);
       
        setLoading(false);
        
      }
      catch (error) {
        console.log(error);
        setError("Something went wrong");
        setLoading(false)
        
        
      }
    }
    getData()
  },[])
  return (
    <>
    {
  loading
    ? <h1>Loading...</h1>
    : error
      ? <h1>{error}</h1>
      : data.map((elem) => (
          <h1 key={elem.id}>{elem.category}</h1>
        ))
}
    </>
  )
}
