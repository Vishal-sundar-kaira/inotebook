import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
  const[auth,setauth]=useState({email:"",password:""})
  let navigate=useNavigate()
  const handleclick=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:auth.email,password:auth.password}) 
    });
    const json=await response.json()
    console.log(json)
    if(json.success)
    {
      //save authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      //useHistory hook
      navigate('/')
      props.showalert("logged in succesfully","success")
    }
    else{
      props.showalert("Invalid details","danger")
    }
  }
  const onchange=(e)=>{
    setauth({...auth,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={auth.email}
            aria-describedby="emailHelp"
            onChange={onchange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            id="email"
            name="email"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={auth.password}
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary"onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
