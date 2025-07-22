import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditProducts() {

    const [title , setTitle] = useState('');
    const [price , setPrice] = useState(0);
    const [description , setDescription] = useState('');

    const{productId} = useParams();

    const navigate = useNavigate();

    const formSubmit = (e) => {
      e.preventDefault();
        axios.put(`https://fakestoreapi.com/products/${productId}`, {
          title: title,
          price: price,
          description: description
        })
        .then( (data) =>{
          console.log(data);
          navigate('/products')
        })
      }
    return (
         <div className='container-fluid d-flex justify-content-center align-items-center  mb-5 mt-5'>
      <form onSubmit={formSubmit}>
        <h1 className="mb-2 p-5">Edit Product </h1>
        <div className="mt-5">
          <label
            htmlFor="ProductTitle "
            className="form-label d-flex justify-content-start p-2 fs-5 fw-bold "
          >
            Product Title
          </label>
          <input
            type="text"
            className="form-control w-100 p-2"
            id='ProductTitle'
            placeholder="Input Product Title"
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mt-5">
          <label
            htmlFor="ProductPrice"
            className=" form-label d-flex justify-content-start p-2 fs-5 fw-bold"
          >
            Product price $
          </label>
          <input
            type="number"
            className="form-control w-100 p-2 "
            id='ProductPrice'
            placeholder="Input Product Price $"
            onChange={(e) => setPrice(e.target.value)}/>

          
        </div>
        <div className="mt-5">
          <label
            htmlFor="ProductDescription"
            className="form-label d-flex justify-content-start p-2 fs-5 fw-bold "
          >
            Product description
          </label>

          <input
            type="text"
            id="ProductDescription"
            className="form-control w-100 p-4"
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <button className="btn btn-success mt-5" type='submit'  >Edit Now</button>
      </form>
      </div>
    );
  }
export default EditProducts;