// adminSignupController.test.js
const request = require('supertest');
const express = require('express');
const { signUpController, apiGatewayAuth } = require('./adminSignupController');
const AdminService = require('../service/adminSignupService');
const responseService = require('../responceHandling/adminResponse');

jest.mock('../service/adminSignupService');
jest.mock('../responceHandling/adminResponse');

const app = express();
app.use(express.json());
app.post('/signup', apiGatewayAuth, signUpController);

describe('Admin Signup Controller', () => {
  test('apiGatewayAuth rejects unauthorized requests', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ username: 'test', password: 'test', email: 'test@test.com' });

    expect(response.status).toBe(401);
  }, 55000);

  test('signUpController creates a new user', async () => {
    AdminService.findUserByUsername.mockResolvedValue(null);
    AdminService.createUser.mockResolvedValue({ username: 'test', password: 'test', email: 'test@test.com' });

    const response = await request(app)
      .post('/signup')
      .set('x-api-key', 'AkS6DfILrJMVc6Hpi4Ri2neyOYDKVpr2xKmmbT7f')
      .send({ username: 'test', password: 'test', email: 'test@test.com' });

    expect(response.status).toBe(201);
  }, 55000);
});