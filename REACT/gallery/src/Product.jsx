import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios";
import Card from './Card';
export default function Product() {
    const [getdata, setdata] = useState([]);
    const [search, setsearch] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
            const res = await axios.get("https://dummyjson.com/products");
            const data = res.data;
   
            setdata(data.products)
     
        };
        fetchdata()
    
    }, []);
    /* filter products
    */
    const productsfiltered = useMemo(() => {
        return getdata.filter((item) => (
            item.title.toLowerCase().includes(search.toLowerCase())
            
        ));
        
    }, [getdata,search]);
  return (
      <>
          <div className='productsearch'>
              {/*input   */}
              <div className='searchbox'>
                  
              <input type="text" placeholder='search product' value={search}
                  onChange={(e) => {
                      setsearch(e.target.value);
              }}/>
          </div>
          <div className="containercard">
            {
              productsfiltered.map((elem) => (
              
                <Card key={elem.id}
                  title={elem.title}
                  description={elem.description}
                  category={elem.category}
                  price={elem.price}
                  stock={elem.stock}
                  brand={elem.brand}
                  thumbnail={elem.thumbnail}
                  
                />
              ))
            }
              </div>
              </div>
        </>
  )
}
