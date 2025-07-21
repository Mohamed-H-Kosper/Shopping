import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './Products.css';
function Products(){
    const [products , setProduct]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts=()=>{
        fetch('https://api.jsonbin.io/v3/b/687e51297b4b8670d8a4e427')
        .then((response)=>(response.json()))
        .then((data)=>
            {setProduct(data.record.products)
    console.log("data",data)
    })  
      };
    const getDeleteProducts = (productId)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
          fetch(`https://api.jsonbin.io/v3/b/687e51297b4b8670d8a4e427/${productId}`,{
            method:'DELETE',
        })
        .then((response)=>(response.json()))
        .then(()=> {getAllProducts ()})
        }
        }
    )
}
    return(
        <>
        <h1 className="d-flex justify-content-center align-items-center text-secondary mt-4" style={{textShadow:'2px 2px 4px white'}}> Admin Dashboard </h1>
        <div className="container-fluid mb-5">
        <div className="d-flex justify-content-center align-items-center">
     <Link to='/products/add' className="btn btn-success mt-5 d-flex justify-content-center align-items-center btn-add fw-bold ">Add New Product</Link>
     </div>
        <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th className="col-1 ">ID</th>
                    <th className="col-1  ">image</th>
                    <th className="col-2 text-center  ">Title</th>
                    <th className="col-2  text-center">Description</th>
                    <th className=" col-2  text-center">Price</th>
                    <th className=" text-center">Operation</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product)=>{
                return(
                    <tr key={product.id}>
                    <td className="fw-bold fs-5 col-1" >{product.id}</td>
                    <td ><img className="col-1 imageD" src={product.image} alt="no" /></td>
                    <td className="col-2  ">{product.title}</td>
                    <td className="col-2  text-center">{product.description.slice(1,110)}.....</td>
                    <td className=" col-2  text-center fw-bold" style={{color:'#0dcaf0'}}>{product.price} $</td>
                    <td className="d-flex justify-content-evenly pt-5 pb-5 btns  ">
                        <Link to={`/products/${product.id}`} className="btn btn-success  btn1 ">View</Link>
                    <Link to={`/products/edit/${product.id}`} className="btn btn-primary btn2 ">Edit</Link>
                        <Link className="btn btn-danger btn3 " onClick={() => getDeleteProducts(product.id)}>Delete</Link>
                    </td>
              </tr>
                )
            })}
               
            </tbody>
        </table>
        </div>
        </>
    )}
export default Products;