import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1 className="mb-5" style={{ marginTop: '50px' }}>SKILLS</h1> {/* Added margin-top */}
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.id} // Unique key should be here
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/${data.imageSrc}`} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
