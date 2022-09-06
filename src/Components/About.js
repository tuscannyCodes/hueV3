import React from "react";

function About() {
  return (
    <>
    <div className="container aboutText ms-1 w-80 ms-lg-5 ms-md-5">
     <h1 className=" fs-1 fw-bold fst-italic text-white">Its nice to meet you,</h1>

<p className="aboutHeader fs-4 text-white" >My name is Tuscanny, and Im a <a href="https://tuscannycodes.github.io/DesignPage/">Web Designer</a> and <span className="fw-bold"> FrontEnd Software Engineer.</span> I often wonder how ideas and designs come together to make things that are elegant, practical and thechnically impressive. I enjoy challenging myself to create one-of-a-kind designs and web applications that are unique and break the mold of conventional website aesthetics. Building crisp and profesional web apps is fun for me, and a dicipline that inspires my imagination in personal projects.</p>

<p className=" aboutHeader fs-5 text-white"><span className="fw-bold text-white">My approach to design</span> is minimal and concise. I believe that the best ideas are presented simply, with little need for further explanation. Clean and minimal designs intrigue me, and I find it a challenge to subtract from a piece as much as I can until I am left with what I concider to be the 'Core Idea' or; what is most nessesary to effectivly communicate a concept. This philosopy helps us build minimal applications with robust inner workings.</p>


<h1 className=" fs-1 fw-bold fst-italic mt-5 text-white">About this project!</h1>
<p className="aboutHeader fs-5 text-white">Meet Hugh, a conversational chatbot application, one of my favorite ongoing projects. I started building Hugh as soon as I started learning <span className="fw-bold text-white">HTML, CSS </span>and <span className="fw-bold text-white"> JavaScript</span> a few years ago. Over time Ive reworked and rebuilt Hugh many times, and in this current iteration, Ive decided to intergrate the Hugh Chatbot into my <a href= "https://tuscannycodes.github.io/hueV3/" >portfolio website.</a></p>

<p className="aboutHeader fs-5 text-white">This version of Hugh is built using <span className="fw-bold text-white">React Js, Bootstrap </span>and <span className="fw-bold text-white">Framer Motion</span> (also prototyped in <span className="fw-bold text-white">Figma</span>). It has always been a primary concern when building Hugh, to make the user interface 'toy-like' while expanding the complexity of application under the hood. </p>



<h1 className="aboutHeader fs-1 fw-bold fst-italic text-white"><u>Contact me</u></h1>
<p className="fs-5 text-white"><span className="fw-bold text-white">Lets work together!</span></p>
<p className="fs-5">E: tuscannypolk@gmail.com</p>

      </div>


    </>
  );
}

export default About;