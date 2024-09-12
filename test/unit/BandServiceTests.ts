import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import { getBands, URL } from '../../src/services/BandService';  // Update the path accordingly
import { Band } from '../../src/models/Band'; // Make sure to import the Band model

import { afterEach } from 'mocha';
import { beforeEach } from 'mocha';
import { describe } from 'mocha';
import { it } from 'mocha';

describe('getBands', function () {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return a list of bands from the response', async () => {
    const mockBands: Band[] = [
      { bandID: 1, bandName: 'Band A' },
      { bandID: 2, bandName: 'Band B' }
    ];

    // Mock the GET request to return a successful response
    mock.onGet(URL).reply(200, mockBands);

    // Call the function you're testing
    const result = await getBands();

    // Verify the result is what you expect
    expect(result).to.deep.equal(mockBands);
  });

  it('should throw an error if the API request fails', async () => {
    const errorMessage = 'Failed to get bands';

    // Mock the GET request to return an error
    mock.onGet(URL).reply(500);

    try {
      await getBands();
    } catch (e) {
      // Verify that the error message is what you expect
      expect(e.message).to.equal(errorMessage);
    }
  });
});
