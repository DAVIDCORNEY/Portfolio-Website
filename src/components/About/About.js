import React from "react";
import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaNpm,
  FaGitSquare
} from "react-icons/fa";

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="about-me">
              <img
                className="mx-auto rounded-circle"
                src="https://res.cloudinary.com/dcs/image/upload/v1567261524/Portfolio%20Website/david-corney.jpg"
                alt="David Corney"
              />
              <h4>David Corney</h4>
              <p className="text-muted">Junior Developer</p>
              <p>
                I am a Junior Full Stack Developer recently graduated from the
                Northcoders coding Bootcamp in Manchester. Track record of
                working well in a team in a fast-paced environment and working
                well under my initiative. I really enjoy learning new tech and
                the collaborative nature of the industry and am looking forward
                to expanding my knowledge and contributing to and growing with a
                business. I am currently working through a React.js course to
                get exposure to React Hooks and Next.js. My other interests
                include music, cooking (because I enjoy eating!) and running (so
                I can eat more delicious food!).
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="skills">
            <h4 className="text-muted">Programming Languages and Tools</h4>
            <div className="skills-icons">
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <FaJsSquare />
                </li>
                <li className="list-inline-item">
                  <FaReact />
                </li>
                <li className="list-inline-item">
                  <FaNode />
                </li>
                <li className="list-inline-item">
                  <FaGitSquare />
                </li>
                <li className="list-inline-item">
                  <FaNpm />
                </li>
                <li className="list-inline-item">
                  <FaHtml5 />
                </li>
                <li className="list-inline-item">
                  <FaCss3Alt />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
