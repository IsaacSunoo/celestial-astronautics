import React, { Component } from 'react';
import Header from '../../components/Header';
import apiKey from '../../api_key/apiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyNews: {},
      imagesCollection: []
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

    fetch(`https://images-api.nasa.gov/search?q=apollo%20landing&media_type=image`)
      .then(response => response.json())
      .then(data => this.setState({imagesCollection: data.collection.items}))
  }

  render() {
    const { dailyNews, imagesCollection } = this.state;
    console.log(dailyNews)
    console.log(imagesCollection)
    const displayImages = imagesCollection.map(space => {
      console.log(space.links[0].href);
      return <img src={space.links[0].href} alt='nasa pics' />
    })

    return (
      <div className='app'>
        <Header />
        <p>{dailyNews.date}</p>
        <h3>{dailyNews.title}</h3>
        {/* <iframe width='560' height='315' src={dailyNews.url}></iframe> */}
        <img src={dailyNews.hdurl} alt='nasas daily pic'/>
        {displayImages}
      </div>
    );
  }
}

export default App;






