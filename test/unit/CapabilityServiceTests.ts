import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import { getCapabilities, URL } from '../../src/services/CapabilityService';  // Update the path accordingly
import { Capability } from '../../src/models/Capability'; // Import Capability model
import { describe } from 'mocha';
import { beforeEach } from 'mocha';
import { afterEach } from 'mocha';
import { it } from 'mocha';

describe('getCapabilities', function () {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return a list of capabilities from the response', async () => {
    const mockCapabilities: Capability[] = [
      { capabilityID: 1, capabilityName: 'Capability A' },
      { capabilityID: 2, capabilityName: 'Capability B' }
    ];

    // Mock the GET request to return a successful response
    mock.onGet(URL).reply(200, mockCapabilities);

    // Call the function you're testing
    const result = await getCapabilities();

    // Verify the result is what you expect
    expect(result).to.deep.equal(mockCapabilities);
  });

  it('should throw an error if the API request fails', async () => {
    const errorMessage = 'Failed to get capabilities';

    // Mock the GET request to return an error
    mock.onGet(URL).reply(500);

    try {
      await getCapabilities();
    } catch (e) {
      // Verify that the error message is what you expect
      expect(e.message).to.equal(errorMessage);
    }
  });

  it('should return an empty array if there are no capabilities', async () => {
    const mockCapabilities: Capability[] = [];

    // Mock the GET request to return an empty array
    mock.onGet(URL).reply(200, mockCapabilities);

    // Call the function you're testing
    const result = await getCapabilities();

    // Verify that the result is an empty array
    expect(result).to.deep.equal(mockCapabilities);
  });

  it('should handle network errors correctly', async () => {
    
    // Mock the GET request to simulate a network error
    mock.onGet(URL).networkError();

    try {
      await getCapabilities();
    } catch (e) {
      // Verify that the error message is the one thrown for network errors
      expect(e.message).to.equal('Failed to get capabilities');
    }
  });
});
