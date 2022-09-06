import React from "react";

function Design() {
  return (
      <>
      
      
    <div className="container designContainer">
      <div className="row justify-content-center">
        {/* I want to add a link for Web Design samples here.*/}
        {/* <h1 className="text-center">Check out my Web Design Design</h1>  */}
        
        <div
          className="card  m-5 rounded-3 border border-dark"
          style={{ width: "20rem" }}
        >

          <img src={require("../images/portfolio.jpg")} className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Animated Website</h5>
            <p className="card-text">
              Animated website design, created with React and Framer Motion.
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
          <img src={require("../images/LandingPage.jpg")} className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Bootstrap Website</h5>
            <p className="card-text">
              A landing page layout design created using Bootstrap.
            </p>
            <a href="https://tuscannycodes.github.io/Bootstrap_Practice/" target="_blank" className="btn btn-dark">
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
          <img src={require("../images/simon.jpg") }className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Simon Game</h5>
            <p className="card-text">
              A minimally designed version of the classic game Simon. 
            </p>
            <a href="https://tuscannycodes.github.io/simon/" target="_blank" className="btn btn-dark">
              visit
            </a>
          </div>
        </div>
        <div
          className="card m-5 rounded-3 border border-dark"
          style={{ width: "20rem" }}
        >
          <img src={require("../images/fruitGame.jpg")} className="card-img-top border border-dark" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Fruit Trivia game</h5>
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
