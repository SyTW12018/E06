process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let Juego = require('../../server/models/Juego.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Juegos', () => {

  describe('GET Juegos', function () {
    this.timeout(0);
    it('Debería obtener todos los juegos', (done) => {
      let juego = new Juego({
        titulo: "Bioshock",
        categoria: "acción",
        fecha: "2007",
        imagen: "imagen.png"
      });
      juego.save();
      chai.request(server)
        .get('/juegos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.not.be.eql(0);
          done();
        });
    });
  });
});
