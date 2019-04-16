import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoading } from '../../actions';
import { getDailyNews } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import PageNotFound from '../../components/PageNotFound';
import Header from '../../components/Header';
import Apollo20 from '../Apollo20';
import Orion from '../Orion';
import MainPage from '../../components/MainPage';
import Milkyway from '../Milkyway';
import Scratchpad from '../Scratchpad';
import Nebula from '../Nebula';
import Galaxy from '../Galaxy';
import Stars from '../Stars';
// import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount = async () => {
    const { getDailyNews } = this.props;
    getDailyNews();
  }

  render() {
    const { dailyNews, isLoading } = this.props;

    return (
      <div className='app'>
        <Route path='/' component={Header} />
          <Switch>
            <Route exact path='/' render={() => (
              <MainPage {...dailyNews}/>
            )} />
            <Route exact path='/apollo' component={Apollo20} />
            <Route exact path='/orion' component={Orion} />
            <Route exact path='/milkyway' component={Milkyway} />
            <Route exact path='/nebula' component={Nebula} />
            <Route exact path='/galaxy' component={Galaxy} />
            <Route exact path='/stars' component={Stars} />
            <Route exact path='/scratchpad' component={Scratchpad} />
            <Route component={PageNotFound} />
          </Switch>
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
