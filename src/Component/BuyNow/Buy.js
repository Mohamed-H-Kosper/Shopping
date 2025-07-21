import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Buy.css";

const stripePromise = loadStripe("pk_test_12345"); // Replace with your test public key

const Buy = () => {
    const [quantity, setQuantity] = useState(1);
   const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [loading , setLoading] = useState(true);
  console.log('params ProductDetails',params);
  useEffect(() => {
    axios.get(`${api_url}/${params.productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.error("Error fetching apartments:", error);
      })
      .finally(() => {
        setLoading(false);
      });;
  }, [params.productId]);


  const increaseQuantity = () => setQuantity(q => q * 2);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q / 2 : 1));

   if (!product  || product.length===0 ||loading) {   //كتبنا جزء ده لان فلتر ممكن ياخد قيمه فارع او غير معرف فلازم احط شرط
    return (
        <>
    <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-border  mt-5  spinner">
     </div> 
    </div>
    <div className="d-flex justify-content-center mb-5 align-items-center">
    <div className="wait p-3 "> please wait .....</div>
    </div> 
    </>
    )
}
  return (
    <Elements stripe={stripePromise}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 ">
            {product && (
              <div className="card h-100" data-aos="fade-right" >
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ maxHeight: "300px", objectFit: "contain" , marginTop:'20px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text description">{product.description}</p>
                  <p className="card-text text-info fs-5 fw-bold">
                   price : {(product.price * quantity).toFixed(2)} $ 
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-outline-primary" onClick={decreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button className="btn btn-outline-primary" onClick={increaseQuantity}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-6 col-md-12" data-aos="fade-left">
            <div className="card p-4 h-100">
              <h5 className="mb-4">معلومات الدفع</h5>
              <form>
              <div>
              <label className="m-1 mb-2" htmlFor="name">Username</label>
              <input className="form-control" id="name" type="text" placeholder="please Enter Username" required />
              <label className="m-1 mb-2 mt-3" htmlFor="name">Password</label>
              <input className="form-control" id="name" type="password" placeholder="please Enter Username" required />
              <label className="m-1 mb-2 mt-3" htmlFor="name">Email</label>
              <input className="form-control" id="name" type="email" placeholder="please Enter Username" required />
              </div>
                <div className="form-group mb-3 mt-5">
                  <label className="m-1 mb-2 mt-3">بطاقة الائتمان</label>
                  <div className="border p-3 rounded bg-light">
                    <CardElement options={{ layout: "tabs" }} />
                  </div>
                </div>
                <button className="btn btn-success w-100 mt-3" disabled>
                  الدفع الآن (غير مفعّل)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};
export default Buy;