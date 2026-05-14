import React from "react";
import { experiences } from "../../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-[7vw] lg:px-[12vw] xl:px-[16vw] font-sans bg-skills"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16"> 
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Certification</h2>  {/* Changed from "Experience" to "Certification future be change this" */}
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold">
          A collection of my Learning experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden lg:block  absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-1 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col lg:flex-row items-center mb-10 sm:mb-16 ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="hidden lg:flex absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full justify-center items-center z-10 ">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-xl lg:max-w-md p-4 sm:p-8 rounded-2xl shadow-2 border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "lg:ml-0" : "lg:mr-0"
              } lg:ml-4 lg:mr-4 transform transition-transform duration-300 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)]`} //gride section css
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex min-w-0 flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-white break-words">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-300 break-words">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                    className="bg-[#8245ec] text-gray-300 px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                      
                    </li>
                    
                  ))}
                </ul> {/* Certificate Button and Remove a Feature */}
                <button className="relative overflow-hidden px-5 sm:px-6 py-2 bg-red-600 text-white rounded-lg
               hover:bg-red-300
               active:bg-red-600
               transition"><a href={experience.certificate} target="_blank" rel="noopener noreferrer">Certificate</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

