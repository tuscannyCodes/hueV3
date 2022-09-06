import React from "react";

function Footer() {
    let d = new Date()
 
  // state for the hue responses
  return (
  
      <p className="footer fs-5 text-center fs-6 text-white">

    An ongoing experience by Tuscanny Polk © {d.getFullYear()} All Rights Reserved
      </p>
     
  );
}

export default Footer;