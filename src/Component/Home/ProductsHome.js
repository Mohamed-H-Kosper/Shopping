import { useEffect, useRef, useState } from "react";
import "./ProductsHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ProductsHome({onAddCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    // مثال API — استبدله بـ API حقيقي
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)))
      .catch((error) => {
        console.error("Error fetching apartments:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading) {
    //كتبنا جزء ده لان فلتر ممكن ياخد قيمه فارع او غير معرف فلازم احط شرط
    return (
      <>
        <div className="d-flex justify-content-center align-items-center c-products">
          <div className="spinner-border  mt-5  spinner"></div>
        </div>
        <div className="d-flex justify-content-center mb-5 align-items-center">
          <div className="wait p-3 "> please wait .....</div>
        </div>
      </>
    );
  }

  if (products.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center p-5"
        style={{ color: "#0d6efd" }}
      >
        <h2>No Result check internet Please !</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid" id="gap-scroll">
        <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
          <h2
            className="f-product fw-bold fs-3 text-white"
            style={{ textShadow: "2px 2px 8px black" }}
          >
            Featured products
          </h2>
          <div>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => scroll("left")}
            >
              {<FontAwesomeIcon icon={faArrowLeft} />}
            </button>
            <button
              className="btn btn-outline-dark  "
              onClick={() => scroll("right")}
            >
              {<FontAwesomeIcon icon={faArrowRight} />}
            </button>
          </div>
        </div>

        <div
          className="d-flex overflow-auto gap-3 py-2"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-md-5 col-12 product-new"
              key={product.id}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="card card-product mt-5  ">
                    <img
                      src={product.image}
                      className="card-img-top p-3"
                      alt="NO"
                    />
                    <div className="card-body">
                      <h3 className="card-title">
                        {" "}
                        {product.title.substring(0, 20)}..
                      </h3>
                      <p className="card-text">
                        {product.description.substring(0, 84)}.....
                      </p>
                    </div>
                    <div className="price-more">
                      <p className="card-price text-info fs-4 fw-bold">
                        {product.price} $
                      </p>
                      <Link
                        className="btn btn-success fw-bold "
                        style={{ fontSize: "15px" }}
                        id="btn-more"
                        to={`/product/${product.id}`}
                      >
                        More Details
                      </Link>
                    </div>
                    <button
                    type="button"
                      className="btn btn-sm btn-secondary  mb-3 w-100"
                      style={{ fontSize: "16px" }}
                      onClick={() => {onAddCart(product)}} // منع التركيز لتفادي}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductsHome;
