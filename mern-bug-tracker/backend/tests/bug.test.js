// backend/tests/bug.test.js
const request = require('supertest');
const app = require('../server'); // Express app

describe('POST /api/bugs', () => {
  it('should create a new bug', async () => {
    const response = await request(app)
      .post('/api/bugs')
      .send({ title: 'Bug 1', description: 'Test bug' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Bug 1');
  });
});
