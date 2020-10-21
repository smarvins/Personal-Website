import React from 'react';
import '../styles/main.css';
import '../App.css';
import Navbar from './navbar';

function Contact() {
  return (
    <div className="flex flex-col font-body h-full bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      {/* Navbar */}
      <div className="flex-initial">
        <Navbar/>
      </div>
      <div className="flex-auto bg-white rounded-tl-3xl p-5 ml-2 overflow-hidden">
        <p className="text-3xl text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">Contact</p>
        <p className="text-xl">Why end the conversation here? Let's have a <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">chat</span>.</p>
        {/* Card section */}
        <div className="overflow-y-auto h-full mt-4 ">

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

        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
