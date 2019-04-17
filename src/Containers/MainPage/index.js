import React, { Component } from 'react';
import LoadingGif from '../../images/Loading.gif';
import { connect } from 'react-redux';
import ParticleContainer from '../../components/Particles';
import PropTypes from 'prop-types';

export class MainPage extends Component {
  render() {
    const { date, explanation, hdurl, title, media_type, url, isLoading } = this.props;
    return isLoading ? (
      <div className="loading-display">
        <h2>Loading</h2>
        <img src={LoadingGif} alt="loading gif" />
      </div>
    ) : (
      <div className="home-page">
        <ParticleContainer />
        <h3>{title}</h3>
        {media_type === 'video' ? (
          <iframe width="560" height="315" src={url} title={title} className="center-media" />
        ) : (
          <img src={hdurl} alt="daily nasa media" className="center-media" />
        )}
        <p className="daily-date">{date}</p>
        <p className="daily-description">{explanation}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading
});

MainPage.propTypes = {
  isLoading: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, null)(MainPage);