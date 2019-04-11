import React, { Component } from 'react';
import Header from '../../components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyNews: {}
    }
  }

  componentDidMount = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=XeCEsX6DeOlFuFKwDIYap4h91dpdZWhjs6aM8hjC';
    fetch(url)
      .then(response => response.json())
      .then(dailyNews => this.setState({dailyNews}));

    fetch('https://data.nasa.gov/resource/f7qz-8dsr.json')
      .then(response => response.json())
      .then(data => console.log(data));

    fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=XeCEsX6DeOlFuFKwDIYap4h91dpdZWhjs6aM8hjC')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    const { dailyNews } = this.state;
    console.log(dailyNews)

    return (
      <div className='app'>
        <Header />
        <p>{dailyNews.date}</p>
        <h3>{dailyNews.title}</h3>
        {/* <iframe width='560' height='315' src={dailyNews.url}></iframe> */}
        <img src={dailyNews.hdurl} alt='nasas daily pic'/>
      </div>
    );
  }
}

export default App;
