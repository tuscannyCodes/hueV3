import React from "react";

function Design() {
  return (
      <>
      
      
    <div className="container designContainer">
      <div className="row justify-content-center">
        <div
          className="card  m-5 rounded-3 border border-dark"
          style={{ width: "20rem" }}
        >
          <img src="public/images/portfolio.jpg" className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text">
              Animated Portfolio design created with React and Framer Motion.
            </p>
            <a href="#" className="btn btn-dark">
              visit
            </a>
          </div>
        </div>
        <div
          className="card m-5 rounded-3 border border-dark"
          style={{ width: "20rem" }}
        >
          <img src="/images/LandingPage.jpg" className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Bootstrap Website</h5>
            <p className="card-text">
              A landing page layout design created using Bootstrap.
            </p>
            <a href="#" className="btn btn-dark">
              visit
            </a>
          </div>
        </div>
      </div>
    </div>





<div className="container designContainer2">
      <div className="row justify-content-center">
        <div
          className="card  m-5 rounded-3 border border-dark "
          style={{ width: "20rem" }}
        >
          <img src="/images/simon.jpg" className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Simon Game Website</h5>
            <p className="card-text">
              A minimally designed version of the classic game Simon. 
            </p>
            <a href="#" className="btn btn-dark">
              visit
            </a>
          </div>
        </div>
        <div
          className="card m-5 rounded-3 border border-dark"
          style={{ width: "20rem" }}
        >
          <img src="/images/fruitGame.jpg" className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Fruit Trivia Website</h5>
            <p className="card-text">
              Fruit Trivia Game that lets user guess fruit based on discription.
            </p>
            <a href="#" className="btn btn-dark">
              visit
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Design;
