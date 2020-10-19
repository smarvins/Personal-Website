import React from 'react';
import '../styles/main.css';
import '../App.css';
import Navbar from './navbar';

function Services() {
  return (
    <div className="flex flex-col font-body h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      <div>
        <p className="font-semibold text-xl p-4 text-gray-200">&lt; steve marvins /&gt;</p>
      </div>
      <div className="flex-initial">
        <Navbar/>
      </div>
      <div className="flex-auto bg-white rounded-tl-3xl p-5 ml-2 overflow-hidden">
        <p className="text-3xl text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">SERVICES</p>
        <p className="text-xl">These are the <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">cool</span> stuff I can do for you.</p>
        {/* Card section */}
        <div className="overflow-y-auto h-full mt-4">
          <div className="md:flex border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md p-5 mb-2">
            <svg className="md:flex-initial sm:inline-block sm:w-20 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
            <div class="md:flex-auto sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p class="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Responsive Design</p>
              <p className=" text-xl md:text-white">By default, this site uses a mobile first breakpoint system.</p>
            </div>
          </div>

          <div className="md:flex border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md p-5 mb-2">
            <svg className="md:flex-initial sm:inline-block sm:w-20 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
            </svg>
            <div class="md:flex-auto sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p class="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Web Development</p>
              <p className=" text-xl md:text-white">By default, this site uses a mobile first breakpoint system.</p>
            </div>
          </div>

          <div className="md:flex border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md rounded-md p-5 mb-2">
            <svg className="md:flex-initial sm:inline-block sm:w-20 w-12 m-2 bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 rounded-md mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
            <div class="md:flex-auto sm:inline-block md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 md:p-10 rounded-md">
              <p class="md:mb-5 w-48 md:text-center text-red-400 sm:text-green-400 md:text-white md:border-2 md:border-white rounded-md text-xl">Responsive Design</p>
              <p className=" text-xl md:text-white">By default, this site uses a mobile first breakpoint system.</p>
            </div>
          </div>

        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Services;
