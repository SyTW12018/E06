process.env.NODE_ENV = 'test';


let mongoose = require("mongoose")
let Juego = require('../../server/models/Juego.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Juegos', () => {

  before((done) => {
    Juego.deleteMany({
      titulo: "Bioshock"
    }, (err) => {
      done();
    });
  });

  describe('GET Juegos', () => {
    it('Debería obtener todos los juegos', (done) => {
      chai.request(server)
        .get('/juegos')
        .end((err, res) => {
          done();
        });
    });
  });

  describe(' GET Juego por ID', () => {
    it('Debería obtener un solo juego', (done) => {
      let juego = new Juego({
        titulo: "Bioshock",
        categoria: "acción",
        fecha: "2007"
      });
      juego.save((err, juego) => {
        chai.request(server)
          .get('/juegos/ficha/' + juego.id)
          .send(juego)
          .end((err, res) => {

            done();
          });
      })

    });
  });
});
