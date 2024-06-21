const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Node Server', () => {
  it('should return HTML with Hello World', done => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          res.text.should.include('<h1>Hello World!</h1>');
          done();
        });
  });
});
