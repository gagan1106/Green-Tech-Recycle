import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NavBar from "../NavBar";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";

const About = () => {
  return (
    <div>
      <NavBar />
      <hr style={{ marginTop: "-1.15%" }} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
};

export default About;