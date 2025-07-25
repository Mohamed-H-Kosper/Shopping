import axios from "axios";
import '../Home/ProductsHome.css';
import '../Products/Product.css';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { Link } from "react-router-dom";

function ProductsHome2({onAddCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

 
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    }
     else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data.slice(10,20)))
      .catch((error) => {
        console.error("Error fetching apartments:", error);
      })
      .finally(()=>{
        setLoading(false);
      })
  }, []);

     if ( loading  ) {   //كتبنا جزء ده لان فلتر ممكن ياخد قيمه فارع او غير معرف فلازم احط شرط
    return (
        <>
    <div className="d-flex justify-content-center align-items-center c-products">
    <div className="spinner-border  mt-5  spinner">
     </div> 
    </div>
    <div className="d-flex justify-content-center mb-5 align-items-center">
    <div className="wait p-3 "> please wait .....</div>
    </div> 
    </>
    )}

    if(products.length===0){
      return(
          <div className='d-flex justify-content-center align-items-center p-5' style={{color:'#0d6efd'}}>
          <h2 >No Result check internet Please !</h2>
          </div>
      )
  }
  return (
    <div className="container-fluid " id="gap-scroll">
      <div className="d-flex justify-content-between align-items-center mb-2 mt-5">
      <h2 className="f-product fw-bold fs-3 text-secondary " data-aos="fade-down">Products Offers</h2>
      <div>
          <button className="btn btn-outline-dark me-2" onClick={() => scroll('left')}>{<FontAwesomeIcon icon={faArrowLeft} />}</button>
          <button className="btn btn-outline-dark" onClick={() => scroll('right')}>{<FontAwesomeIcon icon={faArrowRight} />}</button>
        </div>
      </div>
      
      <div
       className="d-flex overflow-auto gap-3 "
       ref={scrollRef}
       style={{scrollBehavior:'smooth'}}
       data-aos="fade-right"
      >
    {products.map(product => (
      <>
        <div className="col-xl-3 col-lg-4 col-md-5 col-12 product-new" key={product.id}>
                             <div className='container-fluid'>
                                     <div className='row'>
                                           <div className="card card-product mt-5  ">
                                       <img src={product.image} className="card-img-top p-3" alt='NO' loading="lazy" />
                                       <div className="card-body">
                                       <h3 className="card-title"> {product.title.substring(0,20)}..</h3> 
                                       <p className="card-text">{product.description.substring(0,84)}.....</p>
                                       </div>
                                       <div className='price-more'>
                                       <p className="card-price text-info fs-4 fw-bold">{product.price} $</p>
                               <Link className="btn btn-success fw-bold" id='btn-more' style={{fontSize:"15px"}} to={`/product/${product.id}`} data-aos="fade-left" data-aos-duration="3000">More Details</Link>

                                            </div>
                                       <button  className="btn btn-sm btn-secondary mb-3 w-100" style={{fontSize:"16px"}} onClick={()=>onAddCart(product)} data-aos="fade-right" data-aos-duration="3000">Add to Cart</button>
                                            </div>
                                       </div>
                                     </div>
                           </div>
</>
      ))}
      </div>
     </div>
  );
}
export default ProductsHome2;
