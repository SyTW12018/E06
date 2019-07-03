process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let Comentario = require('../../server/models/Comentario.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);


const today = new Date();
const fecha = today.getDay() + '-' + today.getMonth() + '-' + today.getFullYear() + ' a las ' + today.getHours() + ':' + today.getMinutes();

const coment = {
  autor: "123@123",
  titulo: "Half life",
  puntuacion: "10",
  contenido: "Me ha encantado este juego. Deseando que salga la tercera parte",
  creado: fecha
}

const coment2 = {
  autor: "123@123",
  titulo: "Fornite",
  puntuacion: "2",
  contenido: "Este juego es una basura, me arrepiento de haberlo comprado :(",
  creado: fecha
}

let juego = {
  titulo: "Fornite",
}

describe('Comentarios', () => {

  before((done) => { //Before each test we empty the database
    Comentario.deleteMany({}, (err) => {
      done();
    });
  });

  describe('POST Enviar comentario', () => {
    it("Debería agregar un comentario a un juego", (done) => {

      chai.request(server)
        .post('/comentarios/enviar')
        .send(coment)
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql('Comentario enviado');
        });

      chai.request(server)
        .post('/comentarios/enviar')
        .send(coment2)
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql('Comentario enviado');
          done();
        });
    });
  });


  describe('POST Obtener comentarios', () => {
    it("Debería obtener todos los comentarios de un juego", (done) => {
      chai.request(server)
        .post('/comentarios')
        .send(juego)
        .end((err, res) => {
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    });
  });
});
