import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoading } from '../../actions';
import { getDailyNews } from '../../thunks';
import Header from '../../components/Header';
// import apiKey from '../../api_key/apiKey';
import Apollo20 from '../Apollo20';
import MainPage from '../../components/MainPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyNews: {}
    }
  }

  componentDidMount = async () => {
    const { getDailyNews } = this.props;
    getDailyNews();

    const url = 'https://images-api.nasa.gov/search?q=orion%20landing&media_type=image';

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
    // const { setLoading } = this.props;
    // console.log(this.props)
    // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    // setLoading(true);
    // const response = await fetch(url);
    // const dailyNews = await response.json();
    // this.setState({dailyNews});
    // setLoading(false);
    // fetch(url)
    //   .then(response => response.json())
    //   .then(dailyNews => this.setState({dailyNews}));

    // fetch('https://data.nasa.gov/resource/f7qz-8dsr.json')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    // fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  render() {
    // const { dailyNews } = this.state;
    const { isLoading, dailyNews } = this.props;
    console.log(dailyNews)
    console.log(isLoading)

    return (
      <div className='app'>
        <Route path='/' component={Header} />
        {/* { isLoading ?
          <h4>Loading...</h4> : */}
          <Switch>
            <Route exact path='/' render={() => (
              <MainPage {...dailyNews}/>
            )} />
            <Route exact path='/apollo' component={Apollo20} />
          </Switch>
        {/* } */}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  dailyNews: state.dailyNews
});

export const mapDispatchToProps = dispatch => ({
  setLoading: (bool) => dispatch(setLoading(bool)),
  getDailyNews: () => dispatch(getDailyNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
