import * as actions from '../index';

describe('actions', () => {
    describe('setLoading', () => {
        it('should return an object with setLoading and isLoading is true', () => {
            const expected = { type: 'SET_LOADING', isLoading: true };
            const results = actions.setLoading(true);
            expect(results).toEqual(expected);
        });

        it('should return an object with setLoading and isLoading is false', () => {
            const expected = { type: 'SET_LOADING', isLoading: false };
            const results = actions.setLoading(false);
            expect(results).toEqual(expected);
        });
    });

    describe('setError', () => {
        it('should return a type of hasError with an error message', () => {
            const mockError = 'There was an error.';
            const expected = { type: 'SET_ERROR', message: mockError };
            const result = actions.setError(mockError);
            expect(result).toEqual(expected);
        });
    });

    describe('getApolloData', () => {
        it('should return a type of getApolloData with the apollo data', () => {
            const mockApollo = [
                { id: '1', data: 'apollo' },
                { id: '2', data: 'apollo2' }
            ]
            const expected = {
                type: 'GET_APOLLO_DATA',
                apolloData: mockApollo
            }
            const result = actions.getApolloData(mockApollo);
            expect(result).toEqual(expected);
        });
    });

    describe('getDaily', () => {
        it('should return a type of getDaily with the daily data', () => {
            const mockDaily = [
                { id: '1', data: 'Daily 1' },
                { id: '2', data: 'Daily 2' }
            ]
            const expected = {
                type: 'GET_DAILY',
                daily: mockDaily
            }
            const result = actions.getDaily(mockDaily);
            expect(result).toEqual(expected);
        });
    });

    describe('getOrion', () => {
        it('should return a type of getOrionData with the orion data', () => {
            const mockOrion = [
                { id: '1', data: 'Orion 1' },
                { id: '2', data: 'Orion 2' }
            ]
            const expected = {
                type: 'GET_ORION_DATA',
                orionData: mockOrion
            }
            const result = actions.getOrionData(mockOrion);
            expect(result).toEqual(expected);
        });
    });

    describe('getMilkyData', () => {
        it('should return a type of getMilkyData with the milky data', () => {
            const mockMilky = [
                { id: '1', data: 'Milky Way 1' },
                { id: '2', data: 'Milky Way 2' }
            ]
            const expected = {
                type: 'GET_MILKY_DATA',
                milkyData: mockMilky
            }
            const result = actions.getMilkyData(mockMilky);
            expect(result).toEqual(expected);
        });
    });

    describe('getNebulaData', () => {
        it('should return a type of getNebulaData with the nebula data', () => {
            const mockNebula = [
                { id: '1', data: 'Nebula 1' },
                { id: '2', data: 'Nebula 2' }
            ]
            const expected = {
                type: 'GET_NEBULA_DATA',
                nebulaData: mockNebula
            }
            const result = actions.getNebulaData(mockNebula);
            expect(result).toEqual(expected);
        });
    });

    describe('getGalaxyData', () => {
        it('should return a type of getGalaxyData with the galaxy data', () => {
            const mockGalaxy = [
                { id: '1', data: 'Galaxy 1' },
                { id: '2', data: 'Galaxy 2' }
            ]
            const expected = {
                type: 'GET_GALAXY_DATA',
                galaxyData: mockGalaxy
            }
            const result = actions.getGalaxyData(mockGalaxy);
            expect(result).toEqual(expected);
        });
    });
})