import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGalaxy } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import InfoCard from '../../components/InfoCard';
import Particles from '../../components/Particles';
import PropTypes from 'prop-types';

export class Galaxy extends Component {
    componentDidMount = async () => {
        const { getGalaxy } = this.props;
        await getGalaxy();
    }

    render() {
        const { galaxy, isLoading } = this.props;
        let displayGalaxy;
        if (galaxy.length !== 0) {
            displayGalaxy = galaxy.items.map(item => {
            return (
                <div key={item.data[0].nasa_id}>
                    <InfoCard information={item} />
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
                {displayGalaxy}
            </div>
            )
        )
    }
}

export const mapStateToProps = state => ({
    galaxy: state.galaxy,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getGalaxy: () => dispatch(getGalaxy())
});

Galaxy.propTypes = {
  getGalaxy: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Galaxy);