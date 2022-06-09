import React from "react";

function Navbar() {
 
  // state for the hue responses
  return (
  
    
    <nav className="navbar navbar-expand-lg position-absolute">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active fs-2 fw-bold" aria-current="page" href="#" >HOME</a>
            <a className="nav-link fs-2 fw-bold" href="#">PROJECTS</a>
            <a className="nav-link fs-2 fw-bold" href="#">ABOUT</a>
            
          </div>
        </div>
      </div>
    </nav>
    
    


  );
}

export default Navbar;