import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStars } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import InfoCard from '../../components/InfoCard';
import Particles from '../../components/Particles';

class Apollo20 extends Component {

    componentDidMount = async () => {
        const { getStars } = this.props;
        await getStars();
    }

    render() {
        const { stars, isLoading } = this.props;
        let displayStars;
        if (stars.length !== 0) {
            if (isLoading) {
                return (
                    <div className='loading-display'>
                        <h2>Loading</h2>
                        <img src={LoadingGif} alt='loading gif' />
                    </div>
                )
            } else {
                displayStars = stars.items.map(star => {
                    return (
                        <div className='stars-items' key={star.data[0].nasa_id}>
                            <InfoCard information={star} />
                        </div>
                    )
                });
            };
        };

        return (
            <div className='info-items-container'>
                <Particles />
                {displayStars}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    stars: state.stars,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getStars: () => dispatch(getStars())
});

export default connect(mapStateToProps, mapDispatchToProps)(Apollo20);