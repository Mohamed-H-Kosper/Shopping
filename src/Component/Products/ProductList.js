import { useEffect, useState } from "react";
import '../Products/Product.css';
import imageNav2 from '../images/search-bar(1).png';
// import './Navbar/Navbar.css';
import { Link } from "react-router-dom";
import axios from 'axios';


function ProductList(props){
    const ShowButton =props;
    const [products, setProducts] = useState([]);
    const [filters,setFilters] = useState([]); 
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(true);


        const getProducts = ()=> {
        axios.get('https://fakestoreapi.com/products')
        .then((response) =>{ 
            setFilters(response.data)
            setProducts(response.data)
        })
        .catch((error) => {
            console.error("Error fetching apartments:", error);
          })
          .finally(() => {
            setLoading(false);
          });
    }
    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((response) => response.json())
        .then((data) => setCategories(data))

        .catch((error) => {
            console.error("Error fetching apartments:", error);
          })
          .finally(() => {
            setLoading(false);
          });
    };
    
    const getProductInCategories = (catName)=> {
        console.log(catName)
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
        .then((response) => (response.json()))
        .then((data) => setFilters(data))
        .catch((error) => {
            console.error("Error fetching apartments:", error);
          })
          .finally(() => {
            setLoading(false);
          });
    }
    
    useEffect (()=> {
    getProducts();
    getCategories();
},[])


        const handleChange = (event) =>{
            const value = event.target.value;
            if(value.trim()){
              const newFilter= products.filter((f) => 
                f.category.toLowerCase().includes(value.toLowerCase()) ||
                f.title.toLowerCase().includes(value.toLowerCase()) ||
              f.description.toLowerCase().includes(value.toLowerCase()) ||
              f.price.toString().includes(value.toLowerCase()));
        
              setFilters(newFilter);
              
            }
            else{
                setFilters(products);
            }
          }

      
    if ( loading ) {   //كتبنا جزء ده لان فلتر ممكن ياخد قيمه فارع او غير معرف فلازم احط شرط
        return (
            <div style={{minHeight:'36vh', marginTop:"5%"}}>
        <div className="d-flex justify-content-center align-items-center c-products" >
        <div className="spinner-border  mt-5  spinner">
         </div> 
        </div>
        <div className="d-flex justify-content-center mb-5 align-items-center">
        <div className="wait p-3 "> please wait .....</div>
        </div> 
        </div>
        )
    }
    return(
        <>
        <div className="container-fluid  p-3 ">
        <div className="d-flex mt-4 mb-1 m-5 align-items-center justify-content-end form-search " role="search" >
                <input data-aos="fade-left" type="text" className="form  co-bg-light search-products" onChange={handleChange} value={products.category} id="search"  placeholder="Search" aria-label="Search"
                />
              <img data-aos="fade-left" src={imageNav2} alt="no" className="btn btn-primary icon-search-products"  id="icon-search"/>
              </div>
        <div className=" btns">
        <button  className="btn-all btn btn-dark  p-2 m-2 "  onClick={()=>{getProducts();}} data-aos="fade-up">All Products</button>
        {categories.map((cat ) => {    
                return(
                    <button className="btn-all btn btn-secondary p-2 m-2 " style={{border:'none' }}  key={cat} 
                    onClick={()=>getProductInCategories(cat)}
                    data-aos="fade-right" >{cat} </button>
                );
            })}
            </div>
            </div>

<div className="container-fluid mb-5">
            <div className="row  bg-light mt-3">
            {!filters|| filters.length===0 ? (<h2 className="text-center p-5 text-primary">No Result In Search</h2>) :(filters.map(( filter) =>   {   //لازم اشغلها عشان ازرار فلتر تشتغل  
                return(
                    <div className="col-xl-4 col-lg-6 col-12 product-new" key={filter.id} data-aos="zoom-in">
                      <div className='container-fluid'>
                              <div className='row'>
                                    <div className="card card-product mt-5  ">
                                <img src={filter.image} className="card-img-top p-3" alt='NO' />
                                <div className="card-body">
                                <h3 className="card-title"> {filter.title.substring(0,50)}..</h3> 
                                <p className="card-text">{filter.description.substring(0,65)}.....</p>
                                </div>
                                <div className='price-more'>
                                <p className="card-price text-info fs-4 fw-bold">{filter.price} $</p>
                                {ShowButton ? <Link className="btn btn-success fs-5 p-1 " id='btn-more'  to={`/product/${filter.id}`}>More Details</Link>:null}
                                     </div>
                                     </div>
                                </div>
                              </div>
                    </div>
                )}))}
            </div>
        </div>
        </>
    );
}
export default ProductList;