const express = require('express');
const juegos = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Juego = require('../models/Juego');
const Jugados = require('../models/Jugados');

juegos.use(cors());

module.exports = juegos