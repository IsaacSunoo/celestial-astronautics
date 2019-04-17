import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from '../containers/App/App';
import { shallow } from 'enzyme';
import { getDailyNews } from '../thunks';

jest.mock('../thunks');

describe('App', () => {
    let wrapper;
    window.fetch = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

      describe('mapStateToProps', () => {
        it('returns an object with dailyNews', () => {
          const mockState = {
            dailyNews: ['Daily', 'news'],
            error: 'error'
          };
          const expectedState = {
            dailyNews: ['Daily', 'news']
          };
          const mappedProps = mapStateToProps(mockState);
          expect(mappedProps).toEqual(expectedState);
        });
      });

      describe('mapDispatchToProps', () => {
        it('calls dispatch with a getGalaxy thunk', () => {
          const mockDispatch = jest.fn();
          const actionToDispatch = getDailyNews();
          const mappedProps = mapDispatchToProps(mockDispatch);
          mappedProps.getDailyNews();
          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        });
      });
});