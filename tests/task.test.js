const request = require('supertest');
const app = require('../server');

describe('Task API', () => {
  it('should create a new task', async () => {
    const response = await request(app)
      .post('/task')
      .send({ title: 'Test Task' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Task');
    expect(response.body.completed).toBe(false);
  });

  it('should return 400 for empty title', async () => {
    await request(app)
      .post('/task')
      .send({ title: '' })
      .expect(400);
  });

  it('should return 400 for missing title', async () => {
    await request(app)
      .post('/task')
      .send({})
      .expect(400);
  });
});