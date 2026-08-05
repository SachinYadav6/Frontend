import ProductCard from "../Components/ProductCard";
import products from "../data/products";
import "../css/Home.css";


function Home(){

  return(

    <div className="home">


      <section className="hero">

        <h1>
          Welcome To ShopKart
        </h1>


        <p>
          Best products at best prices
        </p>

      </section>




      <section className="products-section">


        <h2>
          Featured Products
        </h2>




        <div className="product-container">


          {
            products.map((product)=>(


              <ProductCard

                key={product.id}

                product={product}

              />


            ))
          }


        </div>


      </section>


    </div>

  )

}


export default Home;