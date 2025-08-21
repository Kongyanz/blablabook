import request from 'supertest';
import app from "../index.js"

describe('GET /connexion', () => {
  it('Should return connexion page', async () => {
    const res = await request(app).get('/connexion');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<title>BlablaBook</title>');
    expect(res.headers['content-type']).toMatch(/html/);
  });
});