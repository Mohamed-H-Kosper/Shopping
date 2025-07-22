import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetailsD() {
  const { productId } = useParams();

  const [ProductD, setProductD] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((response) => response.json())
      .then((data) =>{ 
        setProductD(data);
      console.log('data.record.products',data);

  })
  },[]);
   return (
        <div className="container-fluid ">
        <div className="row">
        <div className="card mt-5 mb-5" style={{border:'3px dashed #0dcaf0'}}>
        <div className="contain-details  ">
      <div className="col-xl-5 col-lg-6 col-md-12 mt-5">
        <img className="image-details" src={ProductD.image} alt="no" />
      </div>
      <div className="card-body col-xl-7 col-lg-6 col-md-12 mt-5">
        <h2 className="pb-4">{ProductD.title}</h2>
        <span className="explan text-white">description:</span>
        <h4 className="pt-2">{ProductD.description}</h4>
        <h5 className="pt-4"><span className="explan">Category:</span> {ProductD.category}</h5>
        <div id="price" className="d-flex gap-4">
          <h6 className="prices text-info fs-4 fw-bold ">Price : {ProductD.price} $ </h6>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
}
export default ProductDetailsD;
