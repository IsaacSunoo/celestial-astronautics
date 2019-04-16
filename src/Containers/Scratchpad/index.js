import React, { Component } from 'react';
import InfoCard from '../../components/InfoCard';

class Scratchpad extends Component {
    constructor() {
        super();
        this.state = {
            testFetch: []
        }
    }

    componentDidMount = async () => {
      const url = 'https://images-api.nasa.gov/search?q=hubble%20space&media_type=image';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({testFetch: data.collection})
    }

  render() {
      const { testFetch } = this.state;
      console.log('testFetch: ', testFetch.items);
      let displayTestFetch;
      if (testFetch.length !== 0) {
        displayTestFetch = testFetch.items.map(item => {
            return (
                <div key={item.data[0].nasa_id}>
                    <InfoCard information={item} />
                </div>
            )
        });
      }

    return (
      <div className='info-items-container'>
          {displayTestFetch}
      </div>
    )
  }
}

export default Scratchpad;