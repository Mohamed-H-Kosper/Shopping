import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import "./HomeImage.css";
function Slider(){
    return(
      <div className='container-fluid'>
      <div className='f-product fw-bold fs-3 text-white' style={{textShadow:"2px 2px 8px black"}} data-aos="fade-right">Big Sale Black Friday</div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5 mt-5 "  data-aos="zoom-in" >
        <div className="carousel-indicators  ">
          <button className="active bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
          <button className="bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button className="bg-secondary carouselDash" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active img-home2" data-bs-interval="3000">
      <img src={image1} className="d-block w-100 imageHome" alt="No img please check internet"/>
    </div>
    <div className="carousel-item img-home2" data-bs-interval="3000">
      <img src={image2} className="d-block w-100 imageHome" alt="No img please check internet"/>
    </div>
    <div className="carousel-item img-home2" data-bs-interval="3000">
      <img src={image3} className="d-block w-100 imageHome" alt="No img please check internet"/>
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
  
    </div>
    )
}
export default Slider;