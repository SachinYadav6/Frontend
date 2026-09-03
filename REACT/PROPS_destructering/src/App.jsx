import React from 'react'
import Card from './Card'

export default function App() {
  function printName() {
    return {
      name: "chareyly josony",
    img_url: "https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    };
  }
  // object bu ftn
  function arraypass() {
    return [
      "chareyly josony",
      "https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    ];

  }
  // fntn click
    function girlName() {
  return "kajal"
  
}
  return (
    <div>
      <Card
        girl={girlName}
        user={{name:'sachin umar',age:25}}
        skills={["HTML", "JAVASCRIPT", "JAVA", "REACT"]}
        product={{
          title: "iPhone", price: 50000
        }}
        categories={["Mobile", "Electronics"]}
        printimageFtn={printName}
        passobject={arraypass}
        
      />
    </div>
  )
}
