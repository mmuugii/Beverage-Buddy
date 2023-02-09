import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./about.css";
import muugiiImage from "./assets/IMG_3980.jpg";
import jeremyImage from "./assets/jeremyf.png";
import jacksonImage from "./assets/jacksona.jpg";
import jacobImage from "./assets/jake.png";

const AboutMe = () => {
  return (
    <>
      <Nav />
      <div className="about-me">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={muugiiImage} alt="Muugii image" />
            <p className="bio">Muugii M.</p>
            <p className="bio">
              Hello, I am a software developer based out of Denver, CO with a
              passion for any activity that involves being outdoors. I hope that
              this application that we built as a team, will be enjoyable to use
              and useful. Cheers!{" "}
            </p>
          </div>
          <div className="team-member">
            <img src={jeremyImage} alt="Jeremy image" />
            <p className="bio">Jeremy F.</p>
            <p className="bio">
              As a Director of Technical Program Management for a large SaaS
              company, I am responsible for driving large scale cross-functional
              product initiatives including defining the strategy and leading
              the execution across multiple teams. We built this app in the MERN
              stack (MongoDB, Express, React, and Node.js) using the technical
              expertise gained for the DU Full Stack Developer Bootcamp.
            </p>
          </div>
          <div className="team-member">
            <img src={jacksonImage} alt="Jackson image" />
            <p className="bio">Jackson A.</p>
            <p className="bio">
              Hi there, I am a full-stack developer based out of Colorado Springs
              who has a passion for solving problems and creating designs that
              are striking and user friendly. I am an avid snowboarder and hiker
              and hope to be able to combine my two passions together one day. 
            </p>
          </div>
          <div className="team-member">
            <img src={jacobImage} alt="Jacob image" />
            <p className="bio">Jacob V.D.</p>
            <p className="bio">
              Hello, I am Junior Developer for the Office of Information Technology for the Governers'.
              I have a passion for writing code and learning new things everyday. I enjoy being active 
              in the gym as well as helping others learn code! I am also graduating this fall from the
              Metropolitan State University Denver in Data Analytics!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
