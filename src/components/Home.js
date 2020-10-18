import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../App.css';

class Home extends React.Component {
  state = {
    hour: null,
  }

  componentDidMount() {
    this.getHour()
  }

  getHour = () => {
   const date = new Date();
   const hour = date.getHours()
   this.setState({
      hour
   });
  }

  render(){
    const {hour} = this.state;
    return (
      <div class="font-body h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
        <div class="flex h-screen">
          <div class="m-auto border-2 border-gray-400 p-8 rounded-md transform md:scale-125 lg:scale-150 xl:scale-100">
            <h1 class="w-10 text-5xl tracking-tighter text-gray-300 font-semibold">{hour < 12 ? `Good Morning!` : `Good Evening!`}</h1>
            <p class="mb-3 text-lg">Let's begin shall we?</p>
            <Link to="/services">
              <span class="animate-ping absolute h-5 w-5 rounded-full bg-black  opacity-75"></span>
              <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}
export default Home;
