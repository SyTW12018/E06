const expect = require('chai').expect
const chai = require('chai');

let User = require('../../server/models/User.js');
let server = require('../../server/server.js');

// const server = require('../../server/index.js');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});

describe('Test de Usuarios', () => {
  it('Debería registrar un usuario', (done) => {
    const today = new Date()

    const userData = {
      first_name: "Aranza",
      last_name: "C",
      email: "prueba@prueba",
      password: "password",
      created: today
    }

    chai.request(server).post('/users/register').send
  })
})
