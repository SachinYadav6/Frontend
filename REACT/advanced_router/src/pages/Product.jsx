import "./Product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">

      <div className="product-links">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>

      <h1>Product Page</h1>

    </div>
  );
}

export default Product;