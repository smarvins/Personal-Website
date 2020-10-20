import React from 'react';
import '../styles/main.css';
import '../App.css';
import Navbar from './navbar';

function Skills() {
  return (
    <div className="flex flex-col font-body h-full bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      {/* Navbar */}
      <div className="flex-initial">
        <Navbar/>
      </div>
      <div className="flex-auto bg-white rounded-tl-3xl p-5 ml-2 overflow-hidden">
        <p className="text-3xl text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">SKILLS</p>
        <p className="text-xl">These are the <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">skills</span> I learned over the past years as a developer.</p>
        {/* Card section */}
        <div className="overflow-y-auto h-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-1">

          {/* Web Frameworks card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Web Frameworks</p>
              <ul className="list-disc text-xl md:text-white">
                <li>React</li>
                <li>Django</li>
              </ul>
            </div>
          </div>

          {/* UI Frameworks card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">UI Frameworks</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Bootstrap</li>
                <li>Tailwindcss (this site uses it!)</li>
                <li>Material UI / Framer motion</li>
              </ul>
            </div>
          </div>

          {/* Markup card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Markup and Styles</p>
              <ul className="list-disc text-xl md:text-white">
                <li>HTML/JSX</li>
                <li>CSS / SCSS</li>
                <li>JSS</li>
              </ul>
            </div>
          </div>

          {/* Language card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Languages</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          {/* Hosting card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Hosting</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Github</li>
                <li>Netlify</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>

          {/* YouTube card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 pl-10 sm:p-10 rounded-md md:w-full lg:h-full">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">YouTube</p>
              <ul className="list-disc text-xl md:text-white">
                <li>Channel Management</li>
                <li>Video Editing</li>
                <li>SEO / Thumbnail Creation</li>
              </ul>
            </div>
          </div>

        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
