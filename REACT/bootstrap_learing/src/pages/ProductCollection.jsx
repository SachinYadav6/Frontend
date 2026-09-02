import React, { useMemo, useState } from 'react'
import Card from '../Card'
  const products = [
  {
    img_url: "https://picsum.photos/300/200?random=1",
    heading: "Wireless Headphones",
    description: "Comfortable wireless headphones with clear sound quality.",
    price: 1499
  },
  {
    img_url: "https://picsum.photos/300/200?random=2",
    heading: "Smart Watch",
    description: "Stylish smartwatch with fitness and activity tracking.",
    price: 2499
  },
  {
    img_url: "https://picsum.photos/300/200?random=3",
    heading: "Running Shoes",
    description: "Lightweight running shoes designed for everyday comfort.",
    price: 1999
  },
  {
    img_url: "https://picsum.photos/300/200?random=4",
    heading: "Laptop Backpack",
    description: "Spacious backpack suitable for laptops and daily essentials.",
    price: 899
  },
  {
    img_url: "https://picsum.photos/300/200?random=5",
    heading: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful and clear audio.",
    price: 1299
  },
  {
    img_url: "https://picsum.photos/300/200?random=6",
    heading: "Gaming Mouse",
    description: "Responsive gaming mouse with ergonomic design.",
    price: 699
  },
  {
    img_url: "https://picsum.photos/300/200?random=7",
    heading: "Mechanical Keyboard",
    description: "Mechanical keyboard suitable for coding and gaming.",
    price: 2199
  },
  {
    img_url: "https://picsum.photos/300/200?random=8",
    heading: "Casual T-Shirt",
    description: "Soft cotton casual T-shirt for everyday wear.",
    price: 499
  },
  {
    img_url: "https://picsum.photos/300/200?random=9",
    heading: "Sunglasses",
    description: "Modern sunglasses with a lightweight frame.",
    price: 799
  },
  {
    img_url: "https://picsum.photos/300/200?random=10",
    heading: "Mobile Stand",
    description: "Adjustable mobile stand for desk and video calls.",
    price: 299
  },
  {
    img_url: "https://picsum.photos/300/200?random=11",
    heading: "Power Bank",
    description: "Compact power bank for charging devices on the go.",
    price: 1199
  },
  {
    img_url: "https://picsum.photos/300/200?random=12",
    heading: "Water Bottle",
    description: "Reusable water bottle suitable for gym and travel.",
    price: 399
  },
  {
    img_url: "https://picsum.photos/300/200?random=13",
    heading: "Desk Lamp",
    description: "Modern desk lamp suitable for study and office work.",
    price: 999
  },
  {
    img_url: "https://picsum.photos/300/200?random=14",
    heading: "Phone Case",
    description: "Protective phone case with a slim and durable design.",
    price: 349
  },
  {
    img_url: "https://picsum.photos/300/200?random=15",
    heading: "Travel Bag",
    description: "Durable travel bag with enough space for short trips.",
    price: 1799
  }
    ];
    
export default function ProductCollection() {
    const [search, setsearch] = useState("");
    console.log(search);
    const filteredProduct = useMemo(() => {
        return products.filter((items) => {
            return items.heading.toLowerCase().includes(search.toLowerCase())
        })
    }, [products,search]);
  

  return (
      <>
          
          <div className='d-flex flex-column gap-4 m-4'>
               <h1 className='text-info fw-bold '>product collection</h1>
          <div className='w-50'>
              <input
                  className="form-control"
              onChange={(e) => {
                  setsearch(e.target.value);

                  
              }}
              type="text" placeholder="search products" value={search} />
          </div>
         </div>
          
          <div className='h-50 w-100 d-flex flex-row flex-nowrap overflow-auto gap-4'>
              {
                  filteredProduct.map((elem) => <Card
                      key={elem.heading}
                      url={elem.img_url}
                      heading={elem.heading}
                      description={elem.description}
                      price={elem.price}
                  />)
             }
              
          </div>
      </>
  )
}
