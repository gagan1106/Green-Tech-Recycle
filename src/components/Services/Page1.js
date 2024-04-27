import React from "react";
import { Link } from "react-router-dom";
const Page1 = () => {
  return (
    <div className="container">
      <div className="container1">
        <h1
          style={{
            fontFamily: "Titillium Web",
            fontSize: "2.5em",
            marginLeft: "5%",
            textAlign: "left",
          }}
        >
          E-Waste Management Solutions
        </h1>
      </div>
      <div className="container2">
        <p style={{ fontSize: "17px", textAlign: "left" }}>
          We offer a variety of e-waste management services to help you
          responsibly dispose of your electronic devices. From recycling to data
          destruction, our team is committed to providing sustainable solutions
          that protect the environment.
        </p>
        <div class="button-container">
          <button class="button">Learn More</button>
          <Link class="button" to={"/contact"}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
