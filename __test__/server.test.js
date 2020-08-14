const request = require('supertest');
const server = require('../src/server/index');

describe('GET /test', () => {
	test('responds with json', (done) => {
		request(server).get('/test').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
	});
});
