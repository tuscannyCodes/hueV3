import React from "react";
import {Link} from "react-router-dom";

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DESIGN: '/design',
  }
let navClass = "nav-link fs-2 fw-bold";
// i can add 'active' class to this via on click 

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
           <Link className= {navClass} aria-current="page" to="/">HOME</Link>
            <Link className={navClass} to="/design">DESIGN</Link>
            <Link className={navClass} to="/about">ABOUT</Link>
            
          </div>
        </div>
      </div>
    </nav>
    
    
    </div>

  );
}

export default Navbar;