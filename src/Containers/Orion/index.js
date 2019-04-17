import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrion } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import Particles from '../../components/Particles';
import InfoCard from '../../components/InfoCard';
import PropTypes from 'prop-types';

export class Orion extends Component {

    componentDidMount = async () => {
        const { getOrion } = this.props;
        await getOrion();
    }

  render() {
    const { orion, isLoading } = this.props;
    let displayOrion;
    if (orion.length !== 0) {
      displayOrion = orion.items.map(orionItem => {
        return (
          <div className='orion-items' key={orionItem.data[0].nasa_id}>
            <InfoCard information={orionItem} />
          </div>
        )
      });
    }

    return (
        isLoading ?
        (
        <div className='loading-display'>
            <h2>Loading</h2>
            <img src={LoadingGif} alt='loading gif' />
        </div>
        ) :
        (
        <div className='info-items-container'>
            <Particles />
            {displayOrion}
        </div>
        )
    )
  }
}

export const mapStateToProps = state => ({
  orion: state.orion,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getOrion: () => dispatch(getOrion())
});

Orion.propTypes = {
  getOrion: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Orion);
