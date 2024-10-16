import React from 'react'
import Lottie from "lottie-react"
import gitlogo from "../../assets/github.json"
import instalogo from "../../assets/instagram-2.json"
import linkedInLogo from "../../assets/linkedin-2.json"


function Social() {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/shiva-shanker-prasad" className="home__social-icon" target='_blank'>
        <Lottie animationData={linkedInLogo} className='socialmedia'/>
        </a>
        <a href="https://github.com/shivashankerprasad" className="home__social-icon" target='_blank'>
        <Lottie animationData={gitlogo} className='socialmedia socialmedia-git'/>
        </a>
        <a href="https://www.instagram.com/shiva__shanker__prasad" className="home__social-icon" target='_blank'>
        <Lottie animationData={instalogo} className='socialmedia'/>
        </a>
    </div>
  )
}

export default Social