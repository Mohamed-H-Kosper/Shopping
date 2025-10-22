import { useEffect, useState } from 'react';
import './CardOffer.css' ;
import { Link } from 'react-router-dom';

function CardOffer(props){
    const [products,setProducts] = useState([]);
   const ShowButton =props; 
   const {onAddCart} =props; 
        
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data)=>setProducts(data.slice(-1)))
    .catch((error) => {
        console.error("Error fetching apartments:", error);
      })
},[])
    return(
        <>
        <div className='container-fluid mt-5 pt-1 mb-5 ' >
        <div className='row  '>
        <h2 className='text-white fs-4 fw-bold' style={{textShadow:"2px 2px 7px black"}} data-aos="fade-right">Offer available now !</h2>
        {products.map((product) =>{
            return(
                <div className='   mt-5 mb-5 p-5 offer-product bg-white ' key={product.id} data-aos="fade-up">
                <div className='col-xl-4 container-image  '>
                <img className='image-offer'  loading="lazy" src={product.image} alt="NoPhoto"  />
                </div>

                <div className='col-xl-7 offer-body  '>
                <h2 className='title-product text-dark mt-5 fs-5 mb-5'><span className='title-product text-info fs-4'>Title: </span>{product.title}</h2>
                <span className='title-product text-info fs-4'>Description: </span>
                <h2 className='title-product text-dark mt-2 fs-5'>{product.description}</h2>
                <h2 className='title-product text-dark mt-5 fs-5'><span className='title-product text-info fs-4'>Category: </span>{product.category}</h2>
                <div className='d-flex justify-content-end btns'>
                <button  className="btn btn-sm btn-secondary btn-cart mt-5" onClick={()=>onAddCart(product)} data-aos="zoom-in"   data-aos-duration="3000">Add to Cart</button>
                {ShowButton ? <Link className="btn btn-success p-2 btn-details fs-5 mt-5  " id='btn-more'  to={`/product/${product.id}`} data-aos="zoom-out" data-aos-duration="3000">More Details</Link>:null}
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
export default CardOffer;