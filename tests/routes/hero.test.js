const request = require('supertest');
const app = require('../../index');

test('GET /hero/tanos - correct response', async () => {
	const heroName = 'Tanos';
	const response = await request(app).get(`/hero/${heroName}`);
	expect(response.statusCode).toBe(200);
	expect(response.body).toHaveProperty('name', heroName);
	expect(response.body).toHaveProperty('abilities');
});

test('GET /hero/tanos - 404', async () => {
	const heroName = 'not-exists';
	const response = await request(app).get(`/hero/${heroName}`);
	expect(response.statusCode).toBe(404);
	expect(response.body).toEqual({});
});
