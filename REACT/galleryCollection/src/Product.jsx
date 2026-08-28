import React, { useEffect, useMemo, useState } from 'react'
import axios  from "axios";
import Card from './Card';
export default function Product() {
    const [datacollection, setcollection] = useState([]);
    useEffect(() => {
        const fectdata = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                const data = res.data;
                setcollection(data.products);
            } catch (error) {
                console.log("error");
               
            }
           
        }
        fectdata();
        
    }, []);
    /* filter product*/ 
const [search, setsearch] = useState("");

const filteredproduct = useMemo(() => {
    return datacollection.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
    });
}, [datacollection, search]);
    
  return (
      <>
          <div className="searchcard">
              <input type="text" placeholder='search product' value={search}
                  onChange={(e) => {
                      setsearch(e.target.value)
                  }}
              />
          </div>
          <div className="cardproduct">
          {
              filteredproduct.map((elem) => <Card
                  src={elem.thumbnail}
                  title={elem.title}
                  description={elem.description}
                  category={elem.category}
                  price={elem.price}
                  rating={elem.rating}
                  stock={elem.stock }
                  brand={elem.brand}

              />)
              }
              </div>
      </>
  )
}