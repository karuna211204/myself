import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Karuna sree Gorrepati",
        "I'm full stack developer",
        "Tech Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        {/* Left Side */}
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>

          {/* About Me Section */}
          <div className="about-me">
            <h2>About Me</h2>
            <p style={{ color: "white", fontSize: "20px" }}>
              Hi, I’m Karuna Sree Gorrepati, a passionate full-stack developer dedicated to learning new technologies 
              and crafting innovative solutions. I thrive on problem-solving and am actively seeking new opportunities 
              and project collaborations. Let's connect and explore how we can push the boundaries of what's possible together!
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
