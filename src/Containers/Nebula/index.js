import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNebula } from '../../thunks';
import InfoCard from '../../components/InfoCard';


class Nebula extends Component {
    componentDidMount = async () => {
        const { getNebula } = this.props;
        await getNebula();
    }

    render() {
        const { nebula } = this.props;
        let displayNebula;
        if (nebula.length !== 0) {
            displayNebula = nebula.items.map(item => {
                return (
                    <div key={item.data[0].nasa_id}>
                        <InfoCard information={item} />
                    </div>
                )
            });
        }

        return (
            <div className='info-items-container'>
                {displayNebula}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    nebula: state.nebula
});

export const mapDispatchToProps = dispatch => ({
    getNebula: () => dispatch(getNebula())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nebula);