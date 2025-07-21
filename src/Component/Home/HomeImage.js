import post1 from '../images/post1.jpg';
import strip3 from '../images/strip3.jpg'
import "./HomeImage.css";
function HomeImage(){
    return(
        <>
        <div className='img-home' data-aos="zoom-out">
            <img src={post1} alt="NoPhoto" className='w-100 h-100 imageHome '/>
        </div>
        <div className='d-flex justify-content-center align-items-center img-home2'>
      <img  className='w-100 image-brands' src={strip3} alt="NoPhoto"/>
    </div>
    </>
    )
}
export default HomeImage;