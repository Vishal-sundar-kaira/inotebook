import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//useLocation will help us to detect the active link or active page in pathname.
const Navbar = () => {
  let navigate=useNavigate()
    let location=useLocation();
    useEffect(()=>{
    console.log(location.pathname)
    },[location])
    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            inotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?"active":""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">
                  about
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex">
            <Link class="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link class="btn btn-primary mx-2" to="/signup"  role="button">Sign up</Link></form>:
            <button className="btn btn-primary"onClick={logout}>Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
