const expect = require('chai').expect

let User = require('../../server/models/User.js');
let server = require('../../server/server.js');

// const server = require('../../server/index.js');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});
