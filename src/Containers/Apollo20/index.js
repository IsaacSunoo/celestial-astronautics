import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApollo20 } from '../../thunks';
import LoadingGif from '../../images/Loading.gif';
import InfoCard from '../../components/InfoCard';
import Particles from '../../components/Particles';

class Apollo20 extends Component {

  componentDidMount = async () => {
    const { getApollo20 } = this.props;
    await getApollo20();
  }

  render() {
    const { apollo20, isLoading } = this.props;
    let displayApollo20;
    if (apollo20.length !== 0) {
      if (isLoading) {
        return (
          <div className='loading-display'>
            <h2>Loading</h2>
            <img src={LoadingGif} alt='loading gif' />
          </div>
        )
      } else {
        displayApollo20 = apollo20.collection.items.map(apollo => {
          return (
            <div className='apollo-items' key={apollo.data[0].nasa_id}>
              <InfoCard information={apollo} />
            </div>
          )
        });
      };
    }

    return (
      <div className='info-items-container'>
        <Particles />
        {displayApollo20} 
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  apollo20: state.apollo20,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  getApollo20: () => dispatch(getApollo20())
});

export default connect(mapStateToProps, mapDispatchToProps)(Apollo20);