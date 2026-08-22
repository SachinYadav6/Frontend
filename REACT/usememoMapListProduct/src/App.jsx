import React from "react";
import Card from './Card'
import Product from "./Product";
 export let fruitCollection = [
  
    {
      description: "pomigrant ek good fruits hota hai . or iska juice bahut manga milta hai.", heading: "Pomigrant", price: "$234", img_url: "https://images.unsplash.com/photo-1601767770428-265b2c67780c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9taWdyYW50fGVufDB8fDB8fHww"
    }
    ,
    {
      description: "mago hai fruits ka raja hota hai ok",
      heading: "mango",
      price: "$23",
      img_url: "https://images.unsplash.com/photo-1732472581875-89ff83f18439?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8fDA%3D"
    },
    {
      description: "apple hai fruits  hota hai .apple khane se good engey or health rhta hai .",
      heading: "apple",
      price: "$234",
      img_url: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      description: "gauva hai fruits  hota hai .gauva khane se good engey or health rhta hai .",
      heading: "gauva",
      price: "$24",
      img_url: "https://media.istockphoto.com/id/635837352/photo/fresh-guava-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=-Nht8LZeZb915o-07kbwL56dAymHtY0iEbkzG5Gw_Bw=",
    },
    {
      description: "papaya hai fruits  hota hai .papaya khane se good engey or health rhta hai . iske khane ke bahut profit hota hai.",
      heading: "papaya",
      price: "$124",
      img_url: "https://media.istockphoto.com/id/901473704/photo/green-papaya-leaves-in-nature-garden.jpg?s=612x612&w=0&k=20&c=nbVxUDkuSe3427vJwdbZIg__Gpsa2zBwcptuUPzafO0=",
    }
  ];
export default function App() {

  return (
    <>
      <h1>product</h1>
      <Product/>
      </>
  )
}

