import React from "react";
import {useNavigate} from 'react-router-dom';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DESIGN: '/design',
  }


function Navbar() {
  
  // state for the hue responses
  return (
  
    <div className="navContainer">
    <nav className="navbar navbar-expand-lg position-absolute ">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active fs-2 fw-bold" aria-current="page" href="#" >HOME</a>
            <a className="nav-link fs-2 fw-bold" href="/design">DESIGN</a>
            <a className="nav-link fs-2 fw-bold" href="/about">ABOUT</a>
            
          </div>
        </div>
      </div>
    </nav>
    
    
    </div>

  );
}

export default Navbar;