import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import apiKey from '../../api_key/apiKey';
import Apollo20 from '../Apollo20';
import MainPage from '../../components/MainPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyNews: {}
    }
  }

  componentDidMount = () => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(dailyNews => this.setState({dailyNews}));

    fetch('https://data.nasa.gov/resource/f7qz-8dsr.json')
      .then(response => response.json())
      .then(data => console.log(data));

    fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => console.log(data))

    fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    const { dailyNews } = this.state;
    console.log(dailyNews)
    // const displayImages = imagesCollection.map(space => {
    //   return <img src={space.links[0].href} alt='nasa pics' />
    // })

    return (
      <div className='app'>
        <Route path='/' component={Header} />
        <Route exact path='/' render={() => (
          <MainPage {...dailyNews}/>
        )} />
        <Route exact path='/apollo20' component={Apollo20} />
      </div>
    );
  }
}

export default App;






