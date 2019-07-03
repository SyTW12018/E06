// process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose")
// let User = require('../../server/models/User.js');

// let chai = require("chai")
// let chaiHttp = require('chai-http');
// let server = require('../../server/server.js');
// let should = chai.should();

// chai.use(chaiHttp);

// let usuario = {
//   first_name: "Aranza",
//   last_name: "Cabrera",
//   email: "123@123",
//   password: "123"
// }

// describe('Usuarios', () => {
//   before((done) => {
//     User.deleteMany({}, (err) => {
//       done();
//     });
//   });

//   describe('POST REGISTRO', () => {
//     it('Debería registrar un usuario', (done) => {

//       chai.request(server)
//         .post('/users/register')
//         .send(usuario)
//         .end((err, res) => {
//           res.body.should.be.a('object');
//           res.should.have.status(200);
//           res.body.should.have.property('status').eql(usuario.email + ' registered');
//           done();
//         });
//     });

//     it('No debería registrar un usuario que ya existe', (done) => {
//       chai.request(server)
//         .post('/users/register')
//         .send(usuario)
//         .end((err, res) => {
//           res.body.should.be.a('object');
//           res.body.should.have.property('error').eql('User already exists');
//           done();
//         });
//     });
//   });


//   describe('POST LOGIN', () => {
//     it('Debería iniciar sesión con un usuario', (done) => {
//       chai.request(server)
//         .post('/users/login')
//         .send(usuario)
//         .end((err, res) => {
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
// });


// // describe(' GET Juego por ID', () => {
// //   it('Debería obtener un solo juego', (done) => {
// //     let juego = new Juego({
// //       titulo: "Bioshock",
// //       categoria: "acción",
// //       fecha: "2007"
// //     });
// //     juego.save((err, juego) => {
// //       chai.request(server)
// //         .get('/juegos/ficha/' + juego.id)
// //         .send(juego)
// //         .end((err, res) => {
// //           res.should.have.status(200);
// //           res.body.should.be.a('object');
// //           res.body.should.have.property('titulo');
// //           res.body.should.have.property('categoria');
// //           res.body.should.have.property('fecha');
// //           res.body.should.have.property('_id').eql(juego.id);
// //           done();
// //         });
// //     })

// //   });
// // });
// // });



// // describe("Usuarios", () => {
// //   // beforeEach((done) => {
// //   //   User.remove({}, (err) => {
// //   //     done();
// //   //   });
// //   // });

// //   describe('POST - Registro', () => {
// //     it('Debería registrar a un usuario', (doce => {
// //       chai.request(server)
// //         .get('users/register')
// //         .end((err, res) => {
// //           // res.should.have.status(200);
// //           res.body.should.be.a('array');
// //           // res.body.length.should.be.eql(0);
// //           done();
// //         });
// //     }));
// //   });
// // });


// // const expect = require('chai').expect
// // const chai = require('chai');
// // const assert = chai.assert;

// // const chai = require("chai");
// // const assert = chai.assert;
// // const request = require("supertest")("../../src/routes/Producto");
// // const producto_js = require("../../src/routes/Producto");

// // let User = require('../../server/models/User.js');
// // let server = require('../../server/server.js');


// // const assert = require("chai").assert;
// // const request = require("supertest");
// // const app = require("../../server/server.js");

// // const chai = require("chai");
// // const assert = chai.assert;
// // const request = require("supertest")("../../server/routes/users.js");
// // const producto_js = require("../../server/routes/users.js");

// // var assert = require('assert');
// // var request = require('supertest')
// // var app = require('../../server/routes/users.js');


// // var request = request("http://localhost:5000");

// // describe('Registro', function () {
// //   describe('GET', function () {
// //     it('Prueba', function (done) {
// //       request.post('users/register')
// //         .expect('Content-Type', /json/)
// //         .expect(200, done);
// //     });
// //     // it('Should return json as data format when set Accept header to application/json', function (done) {
// //     //   request.get('/api/products')
// //     //     .set('Accept', 'application/json')
// //     //     .expect('Content-Type', /json/)
// //     //     .expect(200, done);
// //     // });
// //   });
// // });

// // describe("Pruebas sobre Producto.js", function () {
// //   describe("Prueba de creación de un producto", function () {
// //     it("comprobando que se crea correctamente", function () {
// //       const today = new Date()
// //       let user = {
// //         first_name: 34567,
// //         last_name: "test_name",
// //         email: "test_foto",
// //         password: "test_descripcion",
// //         date: today
// //       }
// //       request.post("users/register").send(user).expect("qweqwe");
// //     });
// //   });

// // describe("POST request. Registra un usuario", app => {
// //   request(app).post('/users/register')



// // describe('Test de Usuarios', () => {
// //   it('Debería registrar un usuario', (done) => {
// //     //     const today = new Date()

// //     //     const userData = {
// //     //       first_name: "Aranza",
// //     //       last_name: "C",
// //     //       email: "prueba@prueba",
// //     //       password: "password",
// //     //       created: today
// //     //     }

// //     //     chai.request(server).post('/users/register').send
// //     done();
// //   })
// // })
