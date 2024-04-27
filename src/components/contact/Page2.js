import React from "react";
import { FaCube } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "./map.json";
const Page2 = () => {
  return (
    <div className="containers">
      <div className="contact-second">
        <div className="second-first">
          <p className="first-head">
            Discover Our Efficient and <br />
            Sustainable Electronic Recycling <br />
            Process
          </p>
        </div>
        <div className="second-last">
          <p className="last-para">
            At our company , we take electronic recycling seriously.Our process
            ensures that your e-waste is handled responsibly and sustainably.
          </p>
          <div className="coll">
            <div className="collections">
              <FaCube size={"50"} />

              <p className="collection-head">Collection</p>
              <p className="collection-item">
                We offer convinent collection services
                <br />
                to pick up your electronic waste from
                <br />
                your location.
              </p>
            </div>
            <div className="collections">
              <FaCube size={"50"} />
              <p className="collection-head">Processing</p>
              <p className="collection-item">
                We offer convinent collection services
                <br />
                to pick up your electronic waste from
                <br />
                your location.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="process-content">
        <input
          type="text"
          className="cont-input "
          placeholder="Enter  Your Location"
        />
        <button className="button">Submit</button>
      </div>
      {/*<div style={{ marginLeft: "25%", marginRight: "25%" }}>
        <Lottie animationData={animationData} />
  </div>*/}
    </div>
  );
};

export default Page2;
