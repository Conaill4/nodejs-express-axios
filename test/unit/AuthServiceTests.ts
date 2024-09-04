import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from 'chai';
import { getToken, URL } from '../../src/services/AuthService';
import { describe, it } from "node:test";
import { LoginRequest } from '../../src/models/LoginRequest';

const user: LoginRequest = {
    email: "admin@kainos.com",
    password: "$2a$10$abwOc0Pn.kTEmWCa7GJ0ROXGwmwJXFzX6Fh.81fmS4zOZdjj81jzW"
}

const user2: LoginRequest = {
    email: "admin@kainos.com",
    password: "incorrectPassword"
}

const mock = new MockAdapter(axios);

describe('AuthService', function () {
    describe('getToken', function () {
        it('should return token from response', async () => {
            const data = [user];

            mock.onPost(URL).reply(200, data);

            const results = await getToken(user);
            expect(results).to.not.equal(null);
        })
        it('should return 500 error', async () => {
            const data = [user];
            mock.onPost(URL).reply(500, data);
            try {
                await getToken(user);
              } catch (e) {
                expect(e.message).to.equal('Failed to get user');
                return;
              }
        })
        it('should return unknown error', async () => {
            const data = [user2];
            mock.onPost(URL).reply(404, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Unknown Error Occurred');
                return;
              }
        })
        it('should return 400 error', async () => {
            const data = [user2];
            mock.onPost(URL).reply(400, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('User Credentials Invalid');
                return;
              }
        })
    })
});