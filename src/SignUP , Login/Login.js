import {  useNavigate } from 'react-router-dom';
import './Login.css';
import {  useState } from 'react';
import axios from 'axios';

function Login({token , setToken}) {
  const [username , setUserName] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      url:'https://dummyjson.com/auth/login',
      method : 'POST',
      data : {
        username:username ,
        password:password
      }
    }).then((res)=>{
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      console.log("response data : ", res.data);
      navigate('/products');
      window.location.reload();
      
    }).catch((err) =>{
      console.log(err.response);
      setError(err.response?.data?.message || "Login failed");
    })
  }
  console.log("token new" , token)


  return (
    <>
        <h1 className="d-flex justify-content-center align-items-center text-secondary mt-4" style={{textShadow:'2px 2px 4px white'}} > Admin Dashboard Login</h1>
    <div className="Login mb-5 mt-5 ">
    <form onSubmit={handleLogin} className='total-form' >
      <div className='username'>
        <label htmlFor="username" className='label-form' > Username</label>
        <input className='form-control' value={username} onChange={(e)=> setUserName(e.target.value)} type="text" placeholder="User Name" id="username" required />
      </div>
      <div className='password'>
        <label htmlFor="password" className='label-form'> Password</label>
        <input className='form-control' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" id="password" required />
      </div>

          
     {error &&  <small className='d-flex justify-content-center align-items-center fs-5 text-danger'> {error}</small>}
      <div className='checkbox'>
        <input type="checkbox" id="checkbox" className="m-1" required/>
        <label htmlFor="checkbox" className="m-1">
          I agree to the terms
        </label>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-primary Login-form ' type='submit' >Login</button>
            </div>
    </form>
    <div style={{textAlign:'start',marginTop:'15px'}} >
    <h4 className='fw-bold text-primary form-control' >Username : emilys </h4>
    <h4 className='fw-bold text-primary form-control'>password : emilyspass </h4>
    </div>
    </div>


    </>
  );
}
export default Login;
