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

const mock = new MockAdapter(axios);

describe('AuthService', function () {
    describe('getToken', function () {
        it('should return token from response', async () => {
            const data = user;

            mock.onGet(URL).reply(200, data);

            const results = await getToken(user);
            expect(results).to.be.not.null;
        })

    })
});