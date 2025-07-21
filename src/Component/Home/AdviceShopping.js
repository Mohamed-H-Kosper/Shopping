import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdviceShopping.css';
import { faBoxes, faCheckCircle, faHeadset, faShippingFast, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function AdviceShopping(){
    return(
        <div className='container-fluid'>
        <h2 className='text-center mb-5 mt-5 text-white fw-bold fs-3' style={{textShadow:"2px 2px 8px black"}} data-aos="fade-right">Explore Our Product Advantages</h2>
        <div className="row mb-5">
        <div className="mt-5 d-flex justify-content-around feature ">
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 h-5 c-feature m-1 "  data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faCheckCircle}/>  Guaranteed Quality</h3>
            <h5 className="p-feature">Every product is carefully selected to ensure the best quality.</h5>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 c-feature m-1 " data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faBoxes} />  Wide Variety</h3>
            <h5 className="p-feature">We offer a large selection of products to suit every taste and need.</h5>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 c-feature m-1" data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faHeadset}/>  Excellent Customer support</h3>
            <h5 className="p-feature">Our team is always ready to assist you. </h5>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 c-feature m-1" data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faShippingFast}/>  Fast & Secure shopping</h3>
            <h5 className="p-feature">We deliver right to your doorstep quickly and safely.</h5>
        </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 c-feature m-1" data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faShoppingCart}/>  Easy shopping</h3>
            <h5 className="p-feature">Smooth and fast browsing and checkout process.</h5>
        </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10 p-5 c-feature m-1" data-aos="flip-up">
            <h3 className="title-feature mb-4"><FontAwesomeIcon icon={faShippingFast}/>  Affordable Prices</h3>
            <h5 className="p-feature">Get the best value for your money.</h5>
        </div>
         </div>
         </div>
         </div>
    )
} 
export default AdviceShopping;
