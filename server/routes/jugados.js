const express = require('express');
const jugados = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const Jugados = require('../models/Jugados');
<<<<<<< HEAD
=======
const Juegos = require('../models/Juego');
>>>>>>> 8a0a4b06dd664ba72d98ee43e7dc0f67e3ca9236

jugados.use(cors());

process.env.SECRET_KEY = 'secret'

<<<<<<< HEAD
=======

>>>>>>> 8a0a4b06dd664ba72d98ee43e7dc0f67e3ca9236
jugados.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Jugados.findById(id, function (err, juego) {
        if (err) {
            res.json(err);
        } else {
            res.json(juego);
        }
    });
});

jugados.route('/fichajugados/:id').get(function (req, res) {
    let id = req.params.id;
    Jugados.findById(id, function (err, juego) {
        if (err) {
            res.json(err);
        }
        res.json(juego);
    });
});


// Obtener los juegos jugados (PERFIL)
jugados.route('/').post(function (req, res) {

    let usuario = req.body.email;

    Jugados.find({
        usuario: usuario
    }, function (err, juego) {
        if (err) {
            res.json(err);
        } else {
            res.json(juego);
        }
    });
});


// Consulta si la ficha que se está consultando ha sido jugada por el usuario (true|false)
jugados.post('/consulta', (req, res) => {
    Jugados.findOne({
            usuario: req.body.email,
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            fecha: req.body.fecha
        }).then(user => {
            if (user) {
                res.send(true);
            } else {
                res.send(false);
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

<<<<<<< HEAD
=======

jugados.post('/recomendados', (req, res) => {
    var usuario = req.body.email;
    var vals;
    var array = [];

    Jugados.find({
            usuario: usuario
        },
        function (err, result) {
            if (err) throw err;
            else vals = result;
            for (i = 0; i < vals.length; i++) {
                array.push(vals[i].titulo);
            }
            Juegos.find({
                    titulo: {
                        $nin: array
                    }
                },
                function (err, resultado) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(resultado);
                    }
                });
        });
});



>>>>>>> 8a0a4b06dd664ba72d98ee43e7dc0f67e3ca9236
// Añade el juego como jugado
jugados.post('/add', (req, res) => {
    const today = new Date()
    const jugadoData = {
        usuario: req.body.email,
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        fecha: req.body.fecha,
        dia: today
    }
    Jugados.findOne({
            usuario: req.body.email,
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            fecha: req.body.fecha,
            dia: today
        })
        .then(user => {
            if (!user) {
                Jugados.create(jugadoData)
                    .then(user => {
                        res.json({
                            status: user.usuario + ' ha jugado ' + user.titulo
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })

            } else {
                res.json({
                    error: 'Ya ha jugado a este juego'
                })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = jugados;