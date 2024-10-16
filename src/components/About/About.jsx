import React from 'react'
import "../../css/About.css"
import AboutImg from "../../assets/ss.jpg"
import Info from './Info'
import cv from "../../assets/my_resume.pdf"
const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />

            <div className="about__data">
                <Info/>

                <p className="about__description">As a dedicated Full Stack Developer with expertise in the MERN stack, I have a strong passion for creating dynamic and engaging web applications. Currently, I am in my final year at the Hyderabad Institute in Hyderabad, India, where I have honed my skills in both front-end and back-end development. I am eager to leverage my knowledge and hands-on experience by seeking internships and job opportunities in full-stack development. My goal is to contribute to innovative projects and collaborate with like-minded professionals in the tech industry.</p>

                
                <button type="button" className="btn btn-dark"><a href={cv} download="" className="button button--flex">Download CV <span></span>
                <i className="uil uil-file-download"> </i></a></button>
            </div>
        </div>
    </section>
  )
}

export default About