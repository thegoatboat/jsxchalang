import React from "react";
import John from "./images/John-Doe.jpg";

const AboutMe = () => {
  return (
    <div>
      <section id="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src={John} alt="John" />
      </section>
    </div>
  );
};

export default AboutMe;
