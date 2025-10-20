const request = require('supertest');
const app = require('./app');
let server;

beforeAll(() => {
  server = app.listen(4000); // start on another port for testing
});

afterAll(() => {
  server.close(); // stop server to avoid open handles
});

test('should respond with Hello CI from Node.js!', async () => {
  const res = await request(server).get('/');
  expect(res.text).toBe('Hello CI from Node.js!');
});
