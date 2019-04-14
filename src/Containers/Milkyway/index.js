import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMilkyway } from '../../thunks';
import InfoCard from '../../components/InfoCard';

class Milkyway extends Component {

    componentDidMount = async () => {
        const { getMilkyway } = this.props;
        await getMilkyway();
    }

    render() {
        const { milkyway } = this.props;
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
            <div className='info-items-container'>
                {displayMilkyway}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    milkyway: state.milkyway
});

export const mapDispatchToProps = dispatch => ({
    getMilkyway: () => dispatch(getMilkyway())
});


export default connect(mapStateToProps, mapDispatchToProps)(Milkyway);