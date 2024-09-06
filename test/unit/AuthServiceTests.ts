import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from 'chai';
import { getToken, URL } from '../../src/services/AuthService';
import { describe, it } from "node:test";
import { LoginRequest } from '../../src/models/LoginRequest';

const mock = new MockAdapter(axios);

describe('AuthService', function () {
    describe('getToken', function () {
        it('should return token from response', async () => {
          const user: LoginRequest = {
            email: "admin@kainos.com",
            password: "Adm1n$"
        }
            const data = [user];

            mock.onPost(URL).reply(200, data);

            const results = await getToken(user);
            expect(results).to.not.equal(null);
        })
        it('should return 500 error', async () => {
          const user: LoginRequest = {
            email: "admin@kainos.com",
            password: "Adm1n$"
        }
            const data = [user];
            mock.onPost(URL).reply(500, data);
            try {
                await getToken(user);
              } catch (e) {
                expect(e.message).to.equal('Failed to get user.');
                return;
              }
        })
        it('should return empty email error', async () => {
          const user2: LoginRequest = {
            email: "",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is empty.');
                return;
              }
        })
        it('should return invalid email error for forbidden symbol', async () => {
          const user2: LoginRequest = {
            email: "admin&@kainos.com",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return invalid email error for extra At symbol', async () => {
          const user2: LoginRequest = {
            email: "admin@@kainos.com",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return invalid email error for At Symbol at beginning', async () => {
          const user2: LoginRequest = {
            email: "@adminkainos.com",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return invalid email error for no At Symbol', async () => {
          const user2: LoginRequest = {
            email: "adminkainos.com",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return invalid email error for Space', async () => {
          const user2: LoginRequest = {
            email: "admin @kainos.com",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return invalid email error for Empty Domain', async () => {
          const user2: LoginRequest = {
            email: "admin@",
            password: "Adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Email is invalid.');
                return;
              }
        })
        it('should return empty password error', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: ""
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is empty.');
                return;
              }
        })
        it('should return invalid password error', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "admin"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
        it('should return invalid password error for no capital', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "adm1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
        it('should return invalid password error for no number', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "Admin$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
        it('should return invalid password error for no special character', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "Adm1n"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
        it('should return invalid password error for no lower case', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "ADM1N$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
        it('should return invalid password error for a space', async () => {
          const user2: LoginRequest = {
            email: "admin@kainos.com",
            password: "Adm 1n$"
        }
            const data = [user2];
            mock.onPost(URL).reply(200, data);
            try {
                await getToken(user2);
              } catch (e) {
                expect(e.message).to.equal('Password is invalid.');
                return;
              }
        })
    })
});