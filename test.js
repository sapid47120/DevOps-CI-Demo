const request = require('supertest');
const app = require('./app');

test('should respond with Hello CI from Node.js!', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello CI from Node.js!');
});
