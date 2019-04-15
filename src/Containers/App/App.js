import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoading } from '../../actions';
import { getDailyNews } from '../../thunks';
import Header from '../../components/Header';
import Apollo20 from '../Apollo20';
import Orion from '../Orion';
import MainPage from '../../components/MainPage';
import Milkyway from '../Milkyway';
import Scratchpad from '../Scratchpad';
import Nebula from '../Nebula';
import Galaxy from '../Galaxy';
// import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount = async () => {
    const { getDailyNews } = this.props;
    getDailyNews();

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
    const { dailyNews } = this.props;

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
            <Route exact path='/orion' component={Orion} />
            <Route exact path='/milkyway' component={Milkyway} />
            <Route exact path='/nebula' component={Nebula} />
            <Route exact path='/galaxy' component={Galaxy} />
            <Route exact path='/scratchpad' component={Scratchpad} />
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

// App.propTypes = {
//   dailyNews: PropTypes.array.isRequired,
//   getDailyNews: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
