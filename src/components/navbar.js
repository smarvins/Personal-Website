import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../App.css';

function Navbar() {
  return (
    <div className="flex justify-evenly mx-10 mb-5">
      <div className="flex">
        <Link to="/services" className="m-auto pt-2">
          <span class=" animate-ping absolute h-8 w-8 rounded-full md:hover:bg-white opacity-75 mx-6 mt-2"></span>
          <svg className="w-12 m-auto bg-gray-100 rounded-full p-3 stroke-current text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="font-light text-xl p-2 text-white">services</p>
        </Link>
      </div>

      <div className="flex">
        <Link to="/skills" className="m-auto pt-2">
          <span class=" animate-ping absolute h-8 w-8 rounded-full md:hover:bg-white opacity-75 mx-2 mt-2"></span>
          <svg className="w-12 m-auto bg-gray-100 rounded-full p-3 stroke-current text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <p className="font-light text-xl p-2 text-white">skills</p>
        </Link>
      </div>

      <div className="flex">
        <div className="m-auto pt-2">
          <span class=" animate-ping absolute h-8 w-8 rounded-full md:hover:bg-white opacity-75 mx-3 mt-2"></span>
          <svg className="w-12 m-auto bg-gray-100 rounded-full p-3 stroke-current text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
          <p className="font-light text-xl p-2 text-white">work</p>
        </div>
      </div>

      <div className="flex">
        <Link to="/contact" className="m-auto pt-2">
          <span class=" animate-ping absolute h-8 w-8 rounded-full md:hover:bg-white opacity-75 mx-6 mt-2"></span>
          <svg className="w-12 m-auto bg-gray-100 rounded-full p-3 stroke-current text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
          <p className="font-light text-xl p-2 text-white">contact</p>
        </Link>
      </div>

    </div>
  );
}

export default Navbar;
