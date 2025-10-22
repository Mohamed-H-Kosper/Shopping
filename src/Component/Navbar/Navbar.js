import { useState } from 'react';
import imageNav1 from '../images/shopping-cart.png';
import notification from '../images/notification.png';
import '../Navbar/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Navbar ({setToken ,token , CartItem ,deleteCart}){
  const [showBell , setShowBell] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const loginHandler = () =>{
      navigate('/products');
       const closeBtn = document.querySelector('.btn-close');
  if (closeBtn) {
    setIsOpen(false)
    closeBtn.click();
  }
  }

  const logoutHandler = () =>{
    setToken("");
    localStorage.clear();
    navigate('/login');

 const closeBtn = document.querySelector('.btn-close');
  if (closeBtn) {
    setIsOpen(false)
    closeBtn.click();
  }
  }
const handleClickLink = () => {
  setIsOpen(false);
 const closeBtn = document.querySelector('.btn-close');
  if (closeBtn ) {
    closeBtn.click();
  }
}
    return(
      <>
    <nav className="navbar  navbar-expand-xl nav-ground sticky-top  ">
        <div className="container">
         <div className="navbar-brand">  
            <img  className="Icon" src={imageNav1} alt="NoLogo"  loading="lazy"/>
            <span><Link className="shop-title" to='/'  href="#Home"> Shopping </Link></span>
          </div>  

          <div className='d-flex justify-content-center align-items-center gap-3 '>
            <Dropdown className='bell-small-screen1' onMouseEnter={()=>setShowBell(true)} onMouseLeave={()=>setShowBell(false)} >
      <Dropdown.Toggle className='bg-transparent no-border no-arrow image-notify1 ' >
      <img className='image-notify2  ml-2' src={notification}  alt= 'notify'  loading="lazy"/>  
           <span className='num-notify'>{CartItem.length}</span>   
      </Dropdown.Toggle>
      
        <Dropdown.Menu className='dropdown-animate ' style={{display:'flex' , flexDirection:'column' , backgroundColor:'transparent' ,border:'none'}}>
      {showBell && CartItem.map((cart) => 
      <div className='d-flex justify-content-center bg-white '>
        <Dropdown.Item className='item-dropdown fs-5' > <Link className='item-l-dropdown fs-5' style={{textDecoration:'none'}}  to={`/product/${cart.id}`}>{cart.title.slice(0,15)}</Link></Dropdown.Item> 
        <button className='btn item-dropdown text-primary fs-5' onClick={()=>deleteCart(cart.title)} >X</button>
       </div>
      )}
      </Dropdown.Menu>
      
    </Dropdown>
          <button onClick={()=>setIsOpen(!isOpen)} className="navbar-toggler" style={{backgroundColor:"#71e1fc"}} type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    </div>
          
          <div className="offcanvas offcanvas-end bg-dark " tabindex="-1" id="offcanvasDarkNavbar" 
          aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title " id="label"> <Link className="nav-link shop-link" to='/' href="#Home">Shopping</Link>  </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>
            <div className="offcanvas-body">
                <ul className=" navbar-nav justify-content-center flex-grow-1 ">
                    <li className="nav-item">
                    <Link className="nav-link " to='/' href="#Home" onClick={handleClickLink}>Home</Link></li>
  <li className="nav-item  ">
        <Link className="nav-link " to='/allProducts' href="#AllProducts" onClick={handleClickLink}> Products </Link>
        </li>
                    <li className="nav-item"><Link className="nav-link" to='/offer' href="#Offers" onClick={handleClickLink}>Offers</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/about' href="#About Us" onClick={handleClickLink}>About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/contactUs' href="#Contact Us" onClick={handleClickLink}>Contact Us</Link></li>
                    </ul>
                 {!token ? <Link onClick={loginHandler}  className=" btn btn-primary fw-bold btn-login" to='/login' href="#login" >Login</Link>:
                 <div> <button className=' btn btn-primary fs-5  fw-bold me-2  btn-admin' onClick={loginHandler} > Admin </button> </div> } 
           {token ? <div> <Link to='/login' onClick={logoutHandler} className=" btn btn-primary fs-5 ml-5 me-2 fw-bold btn-logout " href="#logout">logout</Link></div>: null } 

<Dropdown className='bell-small-screen2' onMouseEnter={()=>setShowBell(true)} onMouseLeave={()=>setShowBell(false)} >
      <Dropdown.Toggle className='bg-transparent no-border no-arrow image-notify1 ' >
      <img className='image-notify2  ml-2' src={notification}  alt= 'notify'  loading="lazy"/>  
           <span className='num-notify'>{CartItem.length}</span>   
      </Dropdown.Toggle>
      
        <Dropdown.Menu className='dropdown-animate ' style={{display:'flex' , flexDirection:'column' , backgroundColor:'transparent' ,border:'none'}}>
      {showBell && CartItem.map((cart) => 
      <div className='d-flex justify-content-center bg-white '>
        <Dropdown.Item className='item-dropdown fs-5' > <Link className='item-l-dropdown fs-5' style={{textDecoration:'none'}}  to={`/product/${cart.id}`}>{cart.title.slice(0,15)}</Link></Dropdown.Item> 
        <button className='btn item-dropdown text-primary fs-5' onClick={()=>deleteCart(cart.title)} >X</button>
       </div>
      )}
      </Dropdown.Menu>
      
    </Dropdown>

            </div>
          </div>
        </div>
      </nav>
      </>
    )
  }
export default Navbar;