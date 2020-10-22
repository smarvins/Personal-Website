import React from 'react';
import { useAlert } from 'react-alert'
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
              <form className="contact-form" onSubmit={sendEmail}>

                <div className="name-form">
                  <label className="label_name">What's your name?</label>
                  <input className="input_name" type="text" name="user_name" />
                </div>

                <div className="email-form">
                  <label className="label_email">Email</label>
                  <input className="input_email" type="email" name="user_email" />
                </div>

                <div className="message-form">
                  <div><label className="label_message">Message</label></div>
                  <div><textarea className="textarea_message" name="message" /></div>
                  <div><input className="text_button" type="submit" value="⇨" onClick={() => {alert.show('Thanks! I have recieved your message and will get back to you in a bit.', {type: 'success'} )}}/></div>
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
