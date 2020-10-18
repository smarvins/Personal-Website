import React from 'react';
import '../styles/main.css';
import '../App.css';

function Services() {
  return (
    <div class="flex flex-col font-body h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      <div>
        <p class="font-semibold text-xl p-4 text-gray-300">&lt; steve marvins /&gt;</p>
      </div>
      <div class="flex-initial">

      </div>
      <div class="flex-auto bg-white rounded-tl-3xl p-5 ml-2">
        <p class="text-3xl text-red-400">SERVICES</p>
        <p class="text-xl">These are the <span class="text-red-400">cool</span> stuff I can do for you.</p>
      </div>
    </div>
  );
}

export default Services;
