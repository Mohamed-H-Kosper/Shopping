import { useEffect, useState } from 'react';
import '../Offer/Offer.css' ;
import { Link } from 'react-router-dom';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import "../Home/HomeImage.css";
function Offer(props ){
        const [products1,setProducts1] = useState([]);
        const [products2,setProducts2] = useState([]);
        const [products3,setProducts3] = useState([]);
        const [products4,setProducts4] = useState([]);
    const [loading , setLoading] = useState(true);
       const ShowButton =props;
       const { onAddCart } = props;
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data)=>{
            setProducts1([data[data.length -1]])
            setProducts2([data[data.length -7]])
            setProducts3([data[data.length -6]])
            setProducts4([data[data.length -14]])
        })
        .catch((error) => {
            console.error("Error fetching apartments:", error);
          })
          .finally(() => {
            setLoading(false);
          });
    },[])

    if ( loading ) {   //كتبنا جزء ده لان فلتر ممكن ياخد قيمه فارع او غير معرف فلازم احط شرط
        return (
            <div style={{minHeight:'36vh', marginTop:"5%"}}>
        <div className="d-flex justify-content-center align-items-center c-products">
        <div className="spinner-border  mt-5  spinner">
         </div> 
        </div>
        <div className="d-flex justify-content-center mb-5 align-items-center">
        <div className="wait p-3 "> please wait .....</div>
        </div> 
        </div>
        )
    }
    if(products1.length===0 || products2.length===0 || products3.length===0 || products4.length===0){
        return(
            <div className='d-flex justify-content-center align-items-center p-5 ' style={{minHeight:'36vh', marginTop:"5%" ,color:'#0d6efd'}}>
            <h2 >No Result check internet Please !</h2>
            </div>
        )
    }
    return(
       <>
             <div className='container-fluid mt-5 mb-5 '>
             <div className='row  '>
             <h2 className="text-white fs-4 fw-bold" style={{textShadow:"2px 2px 8px black"}} data-aos="fade-up">Offer available now !</h2>
             {products1.map((product) =>{
                 return(
                     <div className='   mt-5 mb-5 p-5 offer-product bg-white' key={product.id} data-aos="fade-down">
                     <div className='col-xl-4 container-image  '>
                     <img className='image-offer' src={product.image} alt="NoPhoto"  loading="lazy" />
                     </div>
     
                     <div className='col-xl-7 offer-body  '>
                     <h2 className='title-product text-dark mt-5 fs-5 mb-5'><span className='title-product text-info fs-4'>Title: </span>{product.title}</h2>
                     <span className='title-product text-info fs-4'>Description: </span>
                     <h2 className='title-product text-dark mt-2 fs-5'>{product.description}</h2>
                     <h2 className='title-product text-dark mt-5 fs-5'><span className='title-product text-info fs-4'>Category: </span>{product.category}</h2>
                     <div className='d-flex justify-content-end btns'>
                     <button type='button'  className="btn btn-sm btn-secondary btn-cart mt-5 " onClick={() =>onAddCart(product)} data-aos="zoom-in">Add to Cart</button>
                     {ShowButton ? <Link className="btn btn-success p-2 btn-details fs-5 mt-5 " id='btn-more'  to={`/product/${product.id}`} data-aos="zoom-out">More Details</Link>:null}
                     
                     </div>
                     </div>
                     </div>  
                 )
             })}

                     <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5 mt-5 " data-aos="zoom-in">
        <div className="carousel-indicators  ">
          <button className="active bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
          <button className="bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button className="bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active img-home2" data-bs-interval="3000">
      <img src={image2} className="d-block w-100 imageHome" alt="No img please check internet"  />
    </div>
    <div className="carousel-item img-home2" data-bs-interval="3000">
      <img src={image1} className="d-block w-100 imageHome" alt="No img please check internet" />
    </div>
    <div className="carousel-item img-home2" data-bs-interval="3000">
      <img src={image3} className="d-block w-100 imageHome" alt="No img please check internet" />
    </div>
  </div>
        <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
            <h2 className="text-white fs-4 fw-bold" style={{textShadow:"2px 2px 8px black"}} data-aos="fade-up" >Offer available now !</h2>
             {products2.map((product) =>{
                 return(
                     <div className='   mt-5 mb-5 p-5 offer-product bg-white' key={product.id} data-aos="fade-down">
                     <div className='col-xl-4 container-image  '>
                     <img className='image-offer' src={product.image} alt="NoPhoto"  loading="lazy" />
                     </div>
     
                     <div className='col-xl-7 offer-body  '>
                     <h2 className='title-product text-dark mt-5 fs-5 mb-5'><span className='title-product text-info fs-4'>Title: </span>{product.title}</h2>
                     <span className='title-product text-info fs-4'>Description: </span>
                     <h2 className='title-product text-dark mt-2 fs-5'>{product.description}</h2>
                     <h2 className='title-product text-dark mt-5 fs-5'><span className='title-product text-info fs-4'>Category: </span>{product.category}</h2>
                     <div className='d-flex justify-content-end btns'>
                     <button  className="btn btn-sm btn-secondary btn-cart mt-5 " onClick={() =>onAddCart(product)}  data-aos="zoom-in">Add to Cart</button>
                     {ShowButton ? <Link className="btn btn-success p-2 btn-details fs-5 mt-5  " id='btn-more'  to={`/product/${product.id}`} data-aos="zoom-out">More Details</Link>:null}
                     </div>
                     </div>
                     </div>  
                 )
             })}
               
             <h2 className="text-white fs-4 fw-bold" style={{textShadow:"2px 2px 8px black"}} data-aos="fade-up">Offer available now !</h2>
             {products3.map((product) =>{
                 return(
                     <div className='   mt-5 mb-5 p-5 offer-product bg-white' key={product.id} data-aos="fade-down">
                     <div className='col-xl-4 container-image  '>
                     <img className='image-offer' src={product.image} alt="NoPhoto"  />
                     </div>
     
                     <div className='col-xl-7 offer-body  '>
                     <h2 className='title-product text-dark mt-5 fs-5 mb-5'><span className='title-product text-info fs-4'>Title: </span>{product.title}</h2>
                     <span className='title-product text-info fs-4'>Description: </span>
                     <h2 className='title-product text-dark mt-2 fs-5'>{product.description}</h2>
                     <h2 className='title-product text-dark mt-5 fs-5'><span className='title-product text-info fs-4'>Category: </span>{product.category}</h2>
                     <div className='d-flex justify-content-end btns'>
                     <button  className="btn btn-sm btn-secondary btn-cart mt-5 " onClick={() =>onAddCart(product)} data-aos="zoom-in">Add to Cart</button>
                     {ShowButton ? <Link className="btn btn-success p-2 btn-details fs-5 mt-5" id='btn-more'  to={`/product/${product.id}`} data-aos="zoom-out">More Details</Link>:null}
                     </div>
                     </div>
                     </div>  
                 )
             })}
               
             <h2 className="text-white fs-4 fw-bold" style={{textShadow:"2px 2px 8px black"}} data-aos="fade-up">Offer available now !</h2> 
             {products4.map((product) =>{
                 return(
                     <div className='   mt-5 mb-5 p-5 offer-product bg-white' key={product.id} data-aos="fade-down">
                     <div className='col-xl-4 container-image  '>
                     <img className='image-offer' src={product.image} alt="NoPhoto"  loading="lazy" />
                     </div>
     
                     <div className='col-xl-7 offer-body  '>
                     <h2 className='title-product text-dark mt-5 fs-5 mb-5'><span className='title-product text-info fs-4'>Title: </span>{product.title}</h2>
                     <span className='title-product text-info fs-4'>Description: </span>
                     <h2 className='title-product text-dark mt-2 fs-5'>{product.description}</h2>
                     <h2 className='title-product text-dark mt-5 fs-5'><span className='title-product text-info fs-4'>Category: </span>{product.category}</h2>
                     <div className='d-flex justify-content-end btns'>
                     <button  className="btn btn-sm btn-secondary btn-cart mt-5 " onClick={() =>onAddCart(product)} data-aos="zoom-in">Add to Cart</button>
                     {ShowButton ? <Link className="btn btn-success p-2 btn-details fs-5 mt-5  " id='btn-more'  to={`/product/${product.id}`} data-aos="zoom-out">More Details</Link>:null}
                     </div>
                     </div>
                     </div>  
                 )
             })}
             </div>
             </div>
             </>

    )
}
export default Offer;