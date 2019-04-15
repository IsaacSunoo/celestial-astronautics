import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGalaxy } from '../../thunks';
import InfoCard from '../../components/InfoCard';

class Galaxy extends Component {
    componentDidMount = async () => {
        const { getGalaxy } = this.props;
        await getGalaxy();
    }

    render() {
        const { galaxy } = this.props;
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
            <div className='info-items-container'>
                {displayGalaxy}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    galaxy: state.galaxy
});

export const mapDispatchToProps = dispatch => ({
    getGalaxy: () => dispatch(getGalaxy())
});

export default connect(mapStateToProps, mapDispatchToProps)(Galaxy);