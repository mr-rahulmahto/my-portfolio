import React from 'react'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../../assets/me3.jpeg'
import { Typewriter } from 'react-simple-typewriter'
const About = () => {
  return (
    <section id="about"
      className="px-5 py-8 sm:px-[7vw] md:px-[7vw] lg:px-[12vw] xl:px-[18vw] font-sans mt-8 sm:mt-12 md:mt-20 lg:mt-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Rahul Mahto
          </h2>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'Fullstack Developer',
                  'Software Developer',
                  'Data Analyst',
                  'Coder',
                ]}
                loop={0}          // 0 = infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a full-stack developer with over 6 months internship of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-f6OHrRlPRtZMtdmH22byjzMtoUWPiSO/view?usp=sharing" // Replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-6 sm:px-8 rounded-full mt-2 text-sm sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Right Side */}
          <Tilt
            className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px]"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative rounded-[2rem] border border-purple-400/40 bg-gradient-to-br from-purple-500/25 via-white/10 to-pink-500/20 p-3 shadow-[0_24px_70px_rgba(130,69,236,0.28)]">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0d081f]">
                <img
                  src={profileImage}
                  alt="Rahul Mahto"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
            </div>
          </Tilt>

        </div>

      </div>

    </section>
  )
}

export default About
