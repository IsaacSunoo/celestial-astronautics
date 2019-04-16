import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMilkyway } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import InfoCard from '../../components/InfoCard';
import Particles from '../../components/Particles';

class Milkyway extends Component {

    componentDidMount = async () => {
        const { getMilkyway } = this.props;
        await getMilkyway();
    }

    render() {
        const { milkyway, isLoading } = this.props;
        let displayMilkyway;
        if (milkyway.length !== 0) {
            displayMilkyway = milkyway.items.map(milkyItem => {
                return (
                    <div key={milkyItem.data[0].nasa_id}>
                        <InfoCard information={milkyItem} />
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
                {displayMilkyway}
            </div>
            )
        )
    }
}

export const mapStateToProps = state => ({
    milkyway: state.milkyway,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getMilkyway: () => dispatch(getMilkyway())
});


export default connect(mapStateToProps, mapDispatchToProps)(Milkyway);