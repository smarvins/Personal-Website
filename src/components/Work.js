import React from 'react';
import '../styles/main.css';
import '../App.css';
import Navbar from './navbar';

function Experience() {
  return (
    <div className="flex flex-col font-body h-full bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      {/* Navbar */}
      <div className="flex-initial">
        <Navbar/>
      </div>
      <div className="flex-auto bg-white rounded-tl-3xl p-5 ml-2 overflow-hidden">
        <p className="text-3xl text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">Experience</p>
        <p className="text-xl">The <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">projects</span> and <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">articles </span> under my name.</p>
        {/* Card section */}
        <div className="overflow-y-auto h-full mt-4 grid grid-cols-1 lg:grid-cols-2 gap-1">

          {/* Kazi */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Kazi</p>
              <p className=" text-xl md:text-white">A Django+React hybrid site that can set up a task list for your activities.</p>
              <p className=" text-xl md:text-white mt-4">Tools used:</p>
              <ul className="list-disc text-xl md:text-white">
                <li>React </li>
                <li>Django (DRF)</li>
                <li>JSX</li>
                <li>SASS</li>
              </ul>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://kazi-list.netlify.app/" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">Visit the site</a>
                <a href="https://github.com/Shavolski/Kazi" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white ml-6">See the code</a>
              </div>
            </div>
          </div>

          {/* Web design guidlines */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Web Design Guidlines</p>
              <p className=" text-xl md:text-white">This is a minimalistic site to showcase the guidelines that I follow when designing a project.</p>
              <p className=" text-xl md:text-white mt-4">Tools used:</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Gatsby</li>
                <li>Bulma</li>
                <li>SASS</li>
                <li>GraphQL</li>
              </ul>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://stevemarvins-web-design-guidlines.netlify.app/" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">Visit the site</a>
                <a href="https://github.com/Shavolski/Web-Design-Guidelines" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white ml-6">See the code</a>
              </div>
            </div>
          </div>

          {/* Forex bot */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Forex Bot</p>
              <p className=" text-xl md:text-white">A bot that uses simple moving averages to trade currencies in the FX market.</p>
              <p className=" text-xl md:text-white mt-4">Tools used:</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Python</li>
                <li>OANDA Api</li>
              </ul>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://github.com/Shavolski/Forex-Bot" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">See the code</a>
              </div>
            </div>
          </div>

          {/* Framer motion */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Framer Motion Portfolio</p>
              <p className=" text-xl md:text-white">This is another portfolio but it is built using Framer Motion...an animation library for React.</p>
              <p className=" text-xl md:text-white mt-4">Tools used:</p>
              <ul className="list-disc text-xl md:text-white">
                <li>React</li>
                <li>Framer Motion</li>
                <li>EmailJS</li>
                <li>React Alert</li>
              </ul>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://steve-marvins.netlify.app/" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">Visit the site</a>
                <a href="https://github.com/Shavolski/Framer-Motion-Portfolio" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white ml-6">See the code</a>
              </div>
            </div>
          </div>

          {/* Article 1 */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-64 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Object-Oriented Programming…simplified.</p>
              <p className=" text-xl md:text-white">An article explaining O.O.P as a paradigm and how it functions in the tasks applicable to it.</p>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://medium.com/@stevemarvins.dev/object-oriented-programming-simplified-ddf0e3a628ef" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">Read more..</a>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-64 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Responsive Grommet-UI grids in React.</p>
              <p className=" text-xl md:text-white">An article that showcases how to create a responsive grid using Grommet UI in React.</p>
              {/* Links */}
              <div className=" text-xl md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                <a href="https://medium.com/@stevemarvins.dev/responsive-grommet-ui-grids-in-react-31892103c207" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">Read more..</a>
              </div>
            </div>
          </div>

        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
