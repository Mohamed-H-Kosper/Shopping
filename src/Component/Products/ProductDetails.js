import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Products/ProductDetails.css";
import axios from "axios";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true); // ابدأ اللود
    axios
      .get(`${api_url}/${params.productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err))
      .finally(() => setLoading(false));
  }, [params.productId]);

  // 🧠 3. لو لسه بيحمل
  if (loading || window.scrollTo(0,0) || !product ) {
    return (
      <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <div className="spinner-border text-primary mb-3" />
        <div className="wait p-3">Please wait...</div>
      </div>
      </>
    );
  }


  // 🧠 4. بعد التحميل
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="card mt-5 mb-5">
          <div className="contain-details">
            <div className="col-xl-6 col-lg-8 col-md-12 mt-5">
              <img
                className="image-details"
                src={product.image}
                loading="lazy"
                alt={product.title}
              />
            </div>
            <div className="card-body col-xl-6 col-lg-4 col-md-12 mt-5">
              <h2 className="pb-4 fs-3 title-details">{product.title}</h2>
              <span className="explan">Description:</span>
              <h4 className="pt-2 description">{product.description}</h4>
              <h5 className="pt-4 description">
                <span className="explan">Category:</span> {product.category}
              </h5>
              <div id="price" className="d-flex gap-4">
                <div className="d-flex justify-content-center align-items-center mt-5">
                  <Link
                    to={`/product/${product.id}/buy`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button id="buy" className="btn btn-success p-3 me-4">
                      Buy Now
                    </button>
                  </Link>
                  <h6 className="prices text-info fs-4 fw-bold">
                    {product.price} $
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default ProductDetails;
