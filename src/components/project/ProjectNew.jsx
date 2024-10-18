import React from 'react'
import '../../css/project.css';  // Assuming you have this CSS for styling

import projectImg1 from '../../assets/alumniIng.png';
import projectImg2 from '../../assets/myntra.png';
import projectImg3 from '../../assets/reactBlogImg.png';
import projectImg4 from '../../assets/drumImg.png';

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
    description: "A personal blogging website to write blogs, built using React, deployed on  GitHub.",
    imgSrc: projectImg3,
    link: "https://shivashankerprasad.github.io/React-Blog-page/"
  },
  {
    title: "Drum kit simulator",
    description: "A drum kit simulation created using vanilla css and javascript to mimic audio drums.",
    imgSrc: projectImg4,
    link: "https://shivashankerprasad.github.io/drums/"
  }
];

const ProjectNew = () => {
  return (
    <section className="skills section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My projects</span>
        <div >
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
        </div>
        

    </section>
  )
}

export default ProjectNew