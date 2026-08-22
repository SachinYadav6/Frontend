import React from 'react'
import { useMemo, useState } from "react";
import { fruitCollection } from "./App";
import Card from './Card';
export default function Product() {
    const [search,setsearch] = useState("");

const filteredFruits = useMemo(() => {
    return fruitCollection.filter((fruit) =>
        fruit.heading.toLowerCase().includes(search.toLowerCase())
    );
}, [search]);
  return (
      <>
          <h1>search product card fruits:</h1>
          <input
        type="text"
        placeholder="Search fruit"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
          <div className='product'>
              {
                  filteredFruits.map((fruitcard, index) =>
                      <Card
                        key={index}
                       heading={fruitcard.heading}
                      description={fruitcard.description}
                      img_url={fruitcard.img_url}
                     price={fruitcard.price}
                    />
                )
              }
              
        </div>
      </>
  )
}


