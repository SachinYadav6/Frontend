import React from 'react'

export default function Cart({card}) {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {
          card.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm">
                
                <img
                  src={item.img_url}
                  className="card-img-top"
                  alt="img_product"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="mb-1">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="fw-bold fs-5 mb-0">
                    ₹{item.price}
                  </p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

