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

          {/* Responsive card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md ">
            <svg className="md:flex-initial sm:inline-block sm:w-16 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Responsive Design</p>
              <p className=" text-xl md:text-white">Go on and resize the window, I built this site using a mobile first breakpoint system for you to see what I can do.</p>
            </div>
          </div>

          {/* Web Development card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <svg className="md:flex-initial sm:inline-block sm:w-16 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p className="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Web Development</p>
              <p className=" text-xl md:text-white">As a Full-Stack developer, I bridge the gap between the front and back end to create a robust versatile application.</p>
            </div>
          </div>

          {/* Debugging card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <svg className="sm:inline-block sm:w-16 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p className="w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Debugging</p>
              <p className=" text-xl md:text-white">Sleepless nights were spent debugging errors and rectifying code to show my dedication to bring the best version out of a task at hand.</p>
            </div>
          </div>

          {/* Deployment card */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md">
            <svg className="sm:inline-block sm:w-16 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
            <div className="sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p className="w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Deployment</p>
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
