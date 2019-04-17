import { fetchCall } from '../index';

describe('fetchCall', () => {
  let mockReturnData;
    let mockUrl;
    let mockOptions;

  beforeEach(() => {
    mockReturnData = [{}, {}];
    mockUrl = 'http://localhost:3001';
    mockOptions = { method: 'GET' };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockReturnData),
        ok: true
      })
    );
  });

  it('should call fetch with the correct paramaters', () => {
    fetchCall(mockUrl, mockOptions);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should return the expected data if response ok', async () => {
    const result = await fetchCall(mockUrl, 'GET');
    expect(result).toEqual(mockReturnData);
  });

  it('should throw an error if response not ok', async () => {
    const expectedError = Error('Error Retrieving. Status: 404. Body: Could not Get');
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404,
        ok: false,
        body: 'Could not Get'
      })
    );
    await expect(fetchCall(mockUrl)).rejects.toEqual(expectedError);
  });
});
