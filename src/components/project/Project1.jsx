import React from 'react';
import '../../css/project.css';  // Assuming you have this CSS for styling

// Example image imports (replace with actual paths)
import projectImg1 from '../../assets/alumniIng.png';
import projectImg2 from '../../assets/alumniIng.png';
import projectImg3 from '../../assets/alumniIng.png';

const projects = [
  {
    title: "Alumni Connect",
    description: "A platform to connect alumni and students. Full stack project in progress.",
    imgSrc: projectImg1,
    link: "https://youtu.be/ozungY7g8NI"
  },
  {
    title: "Myntra Clone",
    description: "An e-commerce clone of Myntra built with React and Redux. Backend with JavaScript.",
    imgSrc: projectImg2,
    link: "https://tourmaline-yeot-b4b17d.netlify.app/"
  },
  {
    title: "React Blog",
    description: "A personal blog built using React, deployed on GitHub.",
    imgSrc: projectImg3,
    link: "https://shivashankerprasad.github.io/React-Blog-page/"
  }
];

const Project1 = () => {
  return (
    <div className="card-grid">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.imgSrc} alt={`Project ${index + 1}`} />
          </a>
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project1;
