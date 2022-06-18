import React from "react";


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
           <a className= {navClass} aria-current="page" href="/">HOME</a>
            <a className={navClass} href="/design">DESIGN</a>
            <a className={navClass} href="/about">ABOUT</a>
            
          </div>
        </div>
      </div>
    </nav>
    
    
    </div>

  );
}

export default Navbar;