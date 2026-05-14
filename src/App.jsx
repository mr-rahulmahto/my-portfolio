import React from 'react'

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navbar from  './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import BlurBlob from './components/BlurBlob'


function App() {
  return (
   <>
   <div className="min-h-screen overflow-x-hidden bg-[#06020c]">
      <BlurBlob position={{ top: '45%',right: '20%' , left: '25%'}} size={{ width: '39%', height: '45%'}}/>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] 
         ">

         </div>

    <div className='relative pt-16 sm:pt-20'>
      <Navbar/>
       <About/>
        <Skills/>
       <Experience/>
        <Work/>
        <Education/>
       <Contact/>
       <Footer/>
    </div>
   

   </div>
   
   </>

  )
  
}

export default App
