import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrion } from '../../thunks';
import InfoCard from '../../components/InfoCard';

class Orion extends Component {

    componentDidMount = async () => {
        const { getOrion } = this.props;
        await getOrion();
    }

  render() {
    const { orion } = this.props;
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
      <div className='info-items-container'>
        {displayOrion}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
    orion: state.orion
});

export const mapDispatchToProps = dispatch => ({
    getOrion: () => dispatch(getOrion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Orion);
