const server = require('./server');
const request = require('supertest');
const catalogue = require('../api/phones.json');

describe('Server', () => {
  describe('root API endpoint', () => {
    let response;

    beforeAll(async () => {
      response = await request(server).get('/');
    });

    it('should return a 200 status code', () => {
      expect(response.status).toEqual(200);
    });

    it('should send a response of type JSON', () => {
      expect(response.type).toBe('application/json');
    });

    it('should send the correct data in the body', () => {
      const expectedResDAta = {
        message: 'Phone Catalogue API up un running',
      };
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toMatch(
        'Phone Catalogue API up un running',
      );
    });
  });

  describe('/catalogue API endpoint', () => {
    let response;

    beforeAll(async () => {
      response = await request(server).get('/phones');
    });

    it('should return a 200 status code', () => {
      expect(response.status).toEqual(200);
    });

    it('should send a response of type JSON', () => {
      expect(response.type).toBe('application/json');
    });

    it('should send the correct data in the body', () => {
      expect(response.body).toHaveLength(17);
      expect(JSON.stringify(response.body)).toMatch(JSON.stringify(catalogue));
    });
  });
});
