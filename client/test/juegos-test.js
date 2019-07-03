process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let Juego = require('../../server/models/Juego.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Juegos', () => {


  describe(' GET Juego por ID', () => {
    it('Debería obtener un solo juego', (done) => {
      var juego = new Juego({
        _id: "5d1c13d566698839d4791a45",
        titulo: "Fornite",
        categoria: "acción",
        fecha: "2007",
      });

      chai.request(server)
        .get('/juegos/ficha/' + juego.id)
        .send(juego)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('titulo');
          res.body.should.have.property('categoria');
          res.body.should.have.property('fecha');
          res.body.should.have.property('_id').eql(juego.id);
          done();
        });
    });
  });

  describe('GET Juegos', () => {
    it('Debería obtener todos los juegos', (done) => {

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
