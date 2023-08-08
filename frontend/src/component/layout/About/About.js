import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import Github from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/shivams_hrivastava/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/ddbc4fd4i/image/upload/v1690721786/avatars/shivamwallpaper_asnmlv.png"
              alt="Founder"
            />
            <Typography>Shivam Shrivastava</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Shivam Shrivastava.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Sites</Typography>
            <a
              href="https://github.com/asgro98"
              target="blank"
            >
              <Github className="githubSvgIcon" />
            </a>

            <a href="https://instagram.com/shivams_hrivastava" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
