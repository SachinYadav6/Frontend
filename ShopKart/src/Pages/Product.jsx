import { useState } from "react";

import ProductCard from "../Components/ProductCard";
import "../css/Products.css";

import products from "../data/products";

function Product() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("default");



  const categories = [

    "All",

    ...new Set(products.map((item) => item.category))

  ];



  const filteredProducts = products.filter((product) => {

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All"
        ? true
        : product.category === category;

    return searchMatch && categoryMatch;

  });



  const sortedProducts = [...filteredProducts];

  if (sort === "low") {

    sortedProducts.sort((a, b) => a.price - b.price);

  }

  if (sort === "high") {

    sortedProducts.sort((a, b) => b.price - a.price);

  }



  return (

    <div className="products-page">

      <h1>All Products</h1>



      <div className="filter-box">

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />



        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          {categories.map((cat) => (

            <option
              key={cat}
              value={cat}
            >

              {cat}

            </option>

          ))}

        </select>



        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="default">

            Sort By

          </option>

          <option value="low">

            Price : Low to High

          </option>

          <option value="high">

            Price : High to Low

          </option>

        </select>

      </div>



      <div className="products-container">

        {

          sortedProducts.length > 0

            ?

            sortedProducts.map((product) => (

              <ProductCard

                key={product.id}

                product={product}

              />

            ))

            :

            <h2>No Product Found</h2>

        }

      </div>

    </div>

  );

}

export default Product;