import { getDailyNews, getApollo20, getOrion, getMilkyway, getNebula, getGalaxy, getStars } from '../index';
import * as actions from '../../actions';

describe('Thunks', () => {
    let mockDispatch;
    let mockData;
    beforeEach(() => {
        mockDispatch = jest.fn();
        mockData = ['NASA'];
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                mockData
            })
        }));
    });

    describe('getDaily', () => {
        let thunk;
        beforeEach(() => {
            thunk = getDailyNews();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getDailyNews();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError())
        });
    });

    describe('getApollo', () => {
        let thunk;
        beforeEach(() => {
            thunk = getApollo20();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getApollo20();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });

    describe('getOrion', () => {
        let thunk;
        beforeEach(() => {
            thunk = getOrion();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getOrion();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });

    describe('getMilkyway', () => {
        let thunk;
        beforeEach(() => {
            thunk = getMilkyway();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getMilkyway();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });

    describe('getNebula', () => {
        let thunk;
        beforeEach(() => {
            thunk = getNebula();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getNebula();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });

    describe('getGalaxy', () => {
        let thunk;
        beforeEach(() => {
            thunk = getGalaxy();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getGalaxy();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });

    describe('getStars', () => {
        let thunk;
        beforeEach(() => {
            thunk = getStars();
        });

        it('calls fetch', () => {
            thunk(mockDispatch);
            expect(window.fetch).toHaveBeenCalled();
        });

        it('calls dispatch with setLoading', () => {
            thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
        });

        it('should dispatch setLoading to false', async () => {
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
        });

        it.skip('should dispatch setError with error message if the response is not ok', async () => {
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: false,
                statusText: 'Error Retrieving'
            }));
            const thunk = getStars();
            await thunk(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error Retrieving.'))
        });
    });
})