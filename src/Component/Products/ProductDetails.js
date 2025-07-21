import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import '../Products/ProductDetails.css';
import axios from "axios";


function ProductDetails() {
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
      product.length===0 ? (<h1>Loading...</h1>) :  
        <div className="container-fluid  ">
        <div className="row">
        <div className="card mt-5 mb-5" >
        <div className="contain-details" >
      <div className="col-xl-6 col-lg-8 col-md-12 mt-5">
        <img className="image-details" src={product.image} alt="no" data-aos="zoom-out"/>
      </div>
      <div className="card-body col-xl-6 col-lg-4 col-md-12 mt-5" >
        <h2 className="pb-4 fs-3 title-details" data-aos="fade-down">{product.title}</h2>
        <span className="explan " data-aos="fade-left" >description:</span>
        <h4 className="pt-2 description" data-aos="fade-left">{product.description}</h4>
        <h5 className="pt-4 description" data-aos="fade-left"><span className="explan" data-aos="fade-right">Category:</span> {product.category}</h5>
        <div id="price" className="d-flex gap-4">
        <div className="d-flex justify-content-center align-items-center mt-5">
           <Link  style={{textDecoration:'none' , color:'white'}} to={`/product/${product.id}/buy`}  >
           <button id="buy"  className="btn btn-success p-3 me-4" data-aos="fade-up"> Buy Now </button>
           </Link> 
          <h6 className="prices text-info fs-4 fw-bold " data-aos="fade-down"> {product.price} $ </h6>
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