import React from "react";

function Design() {
  return (
     <div className="container designContainer">

<div class="row">
    <div class="col">
    <div className="card p-5 m-5 rounded-3" style={{width: "20rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Portfolio Website</h5>
    <p className="card-text">A design for an animated portfolio site using React JS and Framer Motion.</p>
    <a href="#" className="btn btn-dark">visit</a>
  </div>
</div>
    </div>
    <div class="col">
    <div className="card p-5 m-5 rounded-3" style={{width: "20rem"}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Bootstrap Website</h5>
    <p className="card-text">A landing page layout design created using Bootstrap.</p>
    <a href="#" className="btn btn-dark">visit</a>
  </div>
</div>
    </div>
  </div>




</div> 

  );
}

export default Design;