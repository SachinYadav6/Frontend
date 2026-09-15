export default function ProductCard(props) {

  return (
    <div className="card h-100 border-0 shadow-sm">
      {/* Product Image */}
      <img
        src={props.img_url}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
        alt={props.title}
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column text-center">
        {/* Title */}
        <h5 className="card-title fw-bold text-dark mb-2">{props.title}</h5>

        {/* Description */}
        <p className="card-text text-muted small mb-3">{props.description}</p>

        {/* Price + Category */}
        <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
          <span className="badge bg-secondary">{props.category}</span>
          <span className="text-primary fw-bold fs-5">₹{props.price}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={()=>props.addtocart(props)}
          className="btn btn-success w-100 mt-auto">
          <i className="bi bi-cart-plus me-2"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}
