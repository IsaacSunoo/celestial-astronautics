import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNebula } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import Particles from '../../components/Particles';
import InfoCard from '../../components/InfoCard';



class Nebula extends Component {
    componentDidMount = async () => {
        const { getNebula } = this.props;
        await getNebula();
    }

    render() {
        const { nebula, isLoading } = this.props;
        let displayNebula;
        if (nebula.length !== 0) {
            if (isLoading) {
                return (
                    <div className='loading-display'>
                        <h2>Loading</h2>
                        <img src={LoadingGif} alt='loading gif' />
                    </div>
                )
            } else {
                displayNebula = nebula.items.map(item => {
                    return (
                        <div key={item.data[0].nasa_id}>
                            <InfoCard information={item} />
                        </div>
                    )
                });
            }
        }

        return (
            <div className='info-items-container'>
                <Particles />
                {displayNebula}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    nebula: state.nebula,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getNebula: () => dispatch(getNebula())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nebula);