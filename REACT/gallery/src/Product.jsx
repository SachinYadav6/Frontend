
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

    /* filter products */
    const productsfiltered = useMemo(() => {
        return getdata.filter((item) => (
            item.title.toLowerCase().includes(search.toLowerCase())
        ));

    }, [getdata, search]);

    /* add to card */
    const [cart, setcart] = useState([]);
    console.log(cart);

    function addtocart(product) {

        const existingitem = cart.find(
            (item) => item.title === product.title
        );

        if (!existingitem) {

            const newcart = [...cart];

            newcart.push({
                ...product,
                quantity: 1
            });

            setcart(newcart);

        } else {

            const updatedCart = cart.map((item) => {

                if (item.title === product.title) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }

                return item;
            });

            setcart(updatedCart);
        }
    }

    return (
        <>
            <div className='productsearch'>

                <div className='searchbox'>

                    <input
                        type="text"
                        placeholder='search product'
                        value={search}
                        onChange={(e) => {
                            setsearch(e.target.value);
                        }}
                    />

                </div>

                <div className="containercard">

                    {
                        productsfiltered.map((elem) => (

                            <Card
                                key={elem.id}
                                title={elem.title}
                                description={elem.description}
                                category={elem.category}
                                price={elem.price}
                                stock={elem.stock}
                                brand={elem.brand}
                                thumbnail={elem.thumbnail}
                                addtocart={addtocart}
                                quantity={1}
                            />

                        ))
                    }

                </div>

            </div>
            {/* CART  ADD TO CART UI YAHAN RENDER HOGA */}
             <h1>CART  ADD TO CART UI YAHAN RENDER HOGA</h1>
            <div className='addtocard'>
               
                { cart.map((item) => ( <div key={item.id}> <img src={item.thumbnail} /> <h2>{item.title}</h2> <p>Price: {item.price}</p> <p>Quantity: {item.quantity}</p> </div> )) }
            </div>
        </>
    )
}

