process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let Jugado = require('../../server/models/Jugados.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

let usuario = {
  email: "123@123",
}

let usuario_juego = {
  email: "123@123",
  titulo: "Half life",
  categoria: "acción",
  fecha: "1998",
}

let juego = {
  titulo: "Half life",
  categoria: "acción",
  fecha: "1998"
}

describe('Juegos jugados', () => {

  before((done) => { //Before each test we empty the database
    Jugado.deleteMany({}, (err) => {
      done();
    });
  });

  describe("POST Jugar a juego", () => {
    it("Debería asignar a un usuario un juego como jugado", (done) => {
      chai.request(server)
        .post('/jugados/add')
        .send(usuario_juego)
        .end((err, res) => {
          res.body.should.be.a('object');

          res.body.should.have.property('status').eql(usuario_juego.email + ' ha jugado ' + usuario_juego.titulo);
          done();
        });
    });

    it("No debería asignar a un usuario un juego que ya ha jugado", (done) => {
      chai.request(server)
        .post('/jugados/add')
        .send(usuario_juego)
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('error').eql('Ya ha jugado a este juego');
          done();
        });
    });

    it("Debería devolver true si un juego ha sido jugado por un usuario", (done) => {
      chai.request(server)
        .post('/jugados/consulta')
        .send(usuario_juego)
        .end((err, res) => {
          res.body.should.be.true;
          done();
        });
    });
  })

  describe('POST Juegos jugados por un usuario', () => {

    it('Debería obtener todos los juegos a los que ha jugado', (done) => {

      chai.request(server)
        .post('/jugados')
        .send(usuario)
        .end((err, res) => {
          res.body.should.be.a('array');
          res.body.length.should.not.be.eql(0);
          res.should.have.status(200);
          done();
        });

    });
  });

  describe('POST Recomendados ', () => {

    it('Debería mostrar los juegos recomendados, es decir, a los que no ha jugado', (done) => {

      chai.request(server)
        .post('/jugados/recomendados')
        .send(usuario)
        .end((err, res) => {
          res.body.should.be.a('array');
          res.body.length.should.not.be.eql(0);
          res.should.have.status(200);
          res.body.should.not.contain(juego)
          done();
        });
    });
  });
});
