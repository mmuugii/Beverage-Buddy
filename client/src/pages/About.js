import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./about.css";
import muugiiImage from './assets/IMG_3980.jpg';
import jeremyImage from './assets/jeremyf.png';
import jacksonImage from './assets/jacksona.jpg';


const AboutMe = () => {
  return (
    <>
      <Nav /> <br></br> <br></br> <br></br>
      <div className="about-me">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={muugiiImage} alt="Muugii image" />
            <p className="bio">Muugii M.</p>
            <p className="bio">Hello, I am a software developer based out of Denver, CO with a passion for any activity that involves being outdoors. I hope that this application that we built as a team, will be enjoyable to use and useful. Cheers! </p>
          </div>
          <div className="team-member">
            <img src={jeremyImage} alt="Jeremy image" />
            <p className="bio">Jeremy F.</p>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="team-member">
            <img src={jacksonImage} alt="Jackson image" />
            <p className="bio">Jackson A.</p>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="team-member">
            <img src="./../assets/IMG_3980.jpg" alt="Jacob image" />
            <p className="bio">Jacob V.D.</p>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;