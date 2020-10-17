import React from 'react';
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
      <div class="h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
        <div><h1 class="text-6xl tracking-tighter text-gray-300">{hour < 12 ? `Good Morning!` : `Good Evening!`}</h1></div>
      </div>
    );
  }

}
export default Home;
