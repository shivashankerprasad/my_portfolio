import './css/App.css'
import './css/header.css'
import About from './components/About/About'
import Header from './components/Header'
import Home from './components/HomeSection/Home'
import Skills from './components/Skills/Skills'
import ProjectNew from './components/project/ProjectNew'
import "./css/custom.css"
import Contact from './components/Contact/Contact'
function App() {


  return (
    <>
     <Header></Header>
     <main className="main">
      <Home></Home>
     </main>
     <About/>
     <Skills/>
     <ProjectNew/>
     <Contact/>

    </>
  )
}

export default App
