process.env.NODE_ENV = 'test';

let mongoose = require("mongoose")
let User = require('../../server/models/User.js');

let chai = require("chai")
let chaiHttp = require('chai-http');
let server = require('../../server/server.js');
let should = chai.should();

chai.use(chaiHttp);

let usuario = {
  first_name: "Aranza",
  last_name: "Cabrera",
  email: "123@123",
  password: "123"
}

describe('Usuarios', () => {
  before((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe('POST REGISTRO', function () {

    it('Debería registrar un usuario', (done) => {

      chai.request(server)
        .post('/users/register')
        .send(usuario)
        .end((err, res) => {
          res.body.should.be.a('object');
          res.should.have.status(200);
          res.body.should.have.property('status').eql(usuario.email + ' registered');
          done();
        });
    });

    it('No debería registrar un usuario que ya existe', (done) => {
      chai.request(server)
        .post('/users/register')
        .send(usuario)
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('error').eql('User already exists');
          done();
        });
    });
  });


  describe('POST LOGIN', () => {
    it('Debería iniciar sesión con un usuario', (done) => {
      chai.request(server)
        .post('/users/login')
        .send(usuario)
        .end((err, res) => {
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
