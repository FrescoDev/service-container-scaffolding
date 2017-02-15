import * as chai from 'chai';

import server from '../test-helpers/server.mock';

const expect = chai.expect;

describe('Call to GET service metadata at /meta endpoint', () => {
  describe('#200', () => {
    it('should return json', (done) => {
      server
        .get(`/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.type)
            .to
            .eql('application/json');
          done();
        });
    });

    it('should return the API version', (done) => {
      server
        .get(`/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.version)
            .to
            .eql('1.0');
          done();
        });
    });

    it('should return an OK status', (done) => {
      server
        .get(`/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.health)
            .to
            .eql('ok');
          done();
        });
    });

    it('should return a description of the service', (done) => {
      server
        .get(`/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.description)
            .to
            .eql('This skeletal applicaiton should serve as a template for developing http services');
          done();
        });
    });
  });
});
