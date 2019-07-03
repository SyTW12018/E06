process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let Juego = require('../../server/models/Juego.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Juegos', () => {
  before((done) => { //Before each test we empty the database
    Juego.deleteMany({}, (err) => {
      done();
    });
  });



  describe('GET Juegos', function () {
    this.timeout(0);
    it('Debería obtener todos los juegos', (done) => {

      chai.request(server)
        .get('/juegos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });

  });
});
