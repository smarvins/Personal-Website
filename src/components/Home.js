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
      <div>
        <h2>{hour < 12 ? `Good Morning!` : `Good evening!`}</h2>
      </div>
    );
  }

}
export default Home;
