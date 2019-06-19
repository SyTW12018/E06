const express = require('express');
const juegos = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Juego = require('../models/Juego');
juegos.use(cors());


juegos.route('/').get(function (req, res) {
    Juego.find(function (err, juego) {
        if (err) {
            res.json(err);
        } else {
            res.json(juego);
        }
    });
});

juegos.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Juego.findById(id, function (err, juego) {
        if (err) {
            res.json(err);
        } else {
            res.json(juego);
        }
    });
});

juegos.route('/ficha/:id').get(function (req, res) {
    let id = req.params.id;
    Juego.findById(id, function (err, juego) {
        if (err) {
            res.json(err);
        }
        res.json(juego);
    });
});


module.exports = juegos