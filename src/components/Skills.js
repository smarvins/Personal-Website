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
        <div className="overflow-y-auto h-full mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Web Frameworks card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md ">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 sm:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Web Frameworks</p>
              <p className=" text-xl md:text-white">Go on and resize the window, I built this site using a mobile first breakpoint system for you to see what I can do.</p>
            </div>
          </div>

          {/* UI Frameworks card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 sm:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">UI Frameworks</p>
              <p className=" text-xl md:text-white">As a Full-Stack developer, I bridge the gap between the front and back end to create a robust versatile application.</p>
            </div>
          </div>

          {/* Markup card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 sm:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Markup and Styles</p>
              <p className="text-xl md:text-white">Sleepless nights were spent debugging errors and rectifying code to show my dedication to bring the best version out of a task at hand.</p>
            </div>
          </div>

          {/* Language card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 sm:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Languages</p>
              <p className=" text-xl md:text-white">After multiple successful deployments to different hosting sites, I've got a knack for delivering singular and hybrid applications for users to use.</p>
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
