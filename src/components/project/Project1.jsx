import React from 'react';
import "../../css/project.css";
import myntracloneImg from "../../assets/myntra.png";
import ReactBlogImg from "../../assets/reactBlogImg.png";
import DrumImg from "../../assets/drumImg.png";
import AlumniImg from "../../assets/alumniIng.png";

const Project1 = () => {
  return (
    <div className="card-grid">
      <div className="card">
        <a href="https://youtu.be/ozungY7g8NI" target="_blank" rel="noopener noreferrer">
          <img src={AlumniImg} alt="Card 1" />
        </a>
        <div className="card-content">
          <h3>Alumni Connect</h3>
          <p>A platform to connect alumni and students. A full stack project in progress will be live soon. </p>
        </div>
      </div>

      <div className="card">
        <a href="https://tourmaline-yeot-b4b17d.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={myntracloneImg} alt="Card 2" />
        </a>
        <div className="card-content">
          <h3>Myntra Clone</h3>
          <p>An e-commerce clone of Myntra built with React and Redux.JavaScript is used to build the Backend</p>
        </div>
      </div>

      <div className="card">
        <a href="https://shivashankerprasad.github.io/React-Blog-page/" target="_blank" rel="noopener noreferrer">
          <img src={ReactBlogImg} alt="Card 3" />
        </a>
        <div className="card-content">
          <h3>React Blog</h3>
          <p>A personal blog built using React. Deployed on to github.</p>
        </div>
      </div>

      <div className="card">
        <a href="https://shivashankerprasad.github.io/drums/" target="_blank" rel="noopener noreferrer">
          <img src={DrumImg} alt="Card 4" />
        </a>
        <div className="card-content">
          <h3>Drum Kit</h3>
          <p>Interactive drum kit using JavaScript, Html and css. Deployed on to github.</p>
        </div>
      </div>
    </div>
  );
};

export default Project1;
