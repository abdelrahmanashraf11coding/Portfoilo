import React, { useRef } from "react";
import devAnimation from "../../../src/animation/dev.json";
import "./hero.css";
import Lottie from "lottie-react";
function Hero() {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avater flex">
          <img src="./abdelrahman.jpg" className="avater" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Software Engineer, Educator, and Front-End Specialist
        </h1>
        <p className="subtitle">
          <p>
            I’m Abdelrahman Ashraf, a front-end developer and instructor
            specializing in creating modern and user-friendly web interfaces. I
            focus on delivering practical solutions while empowering others to
            achieve their goals in the tech industry.
          </p>
        </p>
        <div className="all-icons flex">
          <a href="https://x.com/Abdelra53484736" target="_blank" className="icons icon-twitter"></a>
          <a href="https://www.instagram.com/abdelrahmana122/" target="_blank"  className="icons icon-instagram"></a>
          <a href="https://github.com/abdelrahmanashraf11coding" target="_blank" className="icons icon-github"></a>
          <a href="https://www.linkedin.com/in/abdelrahman-ashraf-97293430b/" target="_blank" className="icons icon-linkedin-with-circle"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            //https://lottiereact.com/#onloadedimages
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}

export default Hero;
