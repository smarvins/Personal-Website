import React from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/main.css';
import '../App.css';
import Navbar from './navbar';

function Contact() {
  //Email function for contact form
  const alert = useAlert()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_kfof21m5Ry8f1KhhBfY5J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="flex flex-col font-body h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
      {/* Navbar */}
      <div className="flex-initial">
        <Navbar/>
      </div>
      <div className="flex-auto bg-white rounded-tl-3xl p-5 ml-2 overflow-hidden">
        <p className="text-3xl text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">Contact</p>
        <p className="text-xl">Why end the conversation here? Let's have a <span className="text-red-400 sm:text-green-400 md:text-blue-400 lg:text-pink-400 xl:text-teal-400">chat</span>.</p>
        {/* Card section */}
        <div className="overflow-y-auto h-screen mt-4 ">

          {/* Kazi */}
          <div className="border-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white rounded-md">
            <div className="md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400 p-5 sm:p-10 rounded-md md:w-full lg:h-full">
              <form className="w-full max-w-sm m-auto" onSubmit={sendEmail}>

                <div className="flex items-center border-b border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white py-2 mb-4">
                  <input className="appearance-none bg-transparent border-none w-full text-red-400 sm:text-green-400 md:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="user_name" aria-label="Full name"/>
                  <div className="flex-shrink-0 border-transparent border-4 text-red-400 sm:text-green-400 md:text-white text-sm py-1 px-2 rounded">
                    Name
                  </div>
                </div>

                <div className="flex items-center border-b border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white py-2 mt-8">
                  <input className="appearance-none bg-transparent border-none w-full text-red-400 sm:text-green-400 md:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name="user_email" aria-label="Full name"/>
                  <div className="flex-shrink-0 border-transparent border-4 text-red-400 sm:text-green-400 md:text-white text-sm py-1 px-2 rounded">
                    Email
                  </div>
                </div>

                <div className="flex items-center border-b border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white py-6 mt-8">
                  <textarea className="appearance-none bg-transparent border-none w-full text-red-400 sm:text-green-400 md:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" name="message" aria-label="Full name"/>
                  <div className="flex-shrink-0 border-transparent border-4 text-red-400 sm:text-green-400 md:text-white text-sm py-1 px-2 rounded">
                    Message
                  </div>
                </div>

                <button className="mt-6" type="submit" value="Send" onClick={() => {alert.show('Thanks! I have recieved your message and will get back to you in a bit.', {type: 'success'} )}}>
                  <span className="animate-ping absolute h-5 w-5 rounded-full bg-black opacity-75 -ml-2"></span>
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="flex justify-center md:text-white mt-6 text-red-400 sm:text-green-400 md:text-white lg:text-white xl:text-white">
                  <a href="https://www.linkedin.com/in/stevemarvins-dev/" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white">LinkedIn</a>
                  <a href="https://github.com/Shavolski" target="_blank" rel="noopener noreferrer" className=" border-b-2 border-red-400 sm:border-green-400 md:border-white lg:border-white xl:border-white ml-6">GitHub</a>
                </div>
              </form>
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
