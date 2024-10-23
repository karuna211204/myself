import React from "react";
import educationData from "./data/education.json"; // Renamed the import

const Education = () => {
  return (
    <div className="container ex" id="education">
      <h1 style={{ marginTop: '50px', marginBottom: '30px' }}>EDUCATION</h1> {/* Added margin-top and margin-bottom */}
      {educationData.map((data) => {  // Changed to 'educationData'
        return (
          <div
            key={data.id}
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt="" />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} {data.endDate}{" "}
                </span>{" "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
              <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
