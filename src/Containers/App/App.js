import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDailyNews } from '../../thunks';
import PageNotFound from '../../components/PageNotFound';
import Header from '../../components/Header';
import Apollo20 from '../Apollo20';
import Orion from '../Orion';
import MainPage from '../MainPage';
import Milkyway from '../Milkyway';
import Nebula from '../Nebula';
import Galaxy from '../Galaxy';
import Stars from '../Stars';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount = async () => {
    const { getDailyNews } = this.props;
    await getDailyNews();
  }

  render() {
    const { dailyNews } = this.props;

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
            <Route component={PageNotFound} />
          </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  dailyNews: state.dailyNews
});

export const mapDispatchToProps = dispatch => ({
  getDailyNews: () => dispatch(getDailyNews())
});

App.propTypes = {
  getDailyNews: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
