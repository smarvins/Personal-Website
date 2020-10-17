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
    const {hour, username} = this.state;
    return (
      <div class="h-screen bg-red-400 sm:bg-green-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-teal-400">
        <h2>{hour < 12 ? `Good Morning!` : `Good evening!`}</h2>
      </div>
    );
  }

}
export default Home;
