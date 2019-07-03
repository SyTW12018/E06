const express = require('express');
const comentarios = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Comentario = require('../models/Comentario');

comentarios.use(cors());

comentarios.route('/').post(function (req, res) {

    Comentario.find({
        titulo: req.body.titulo
    }, function (err, comentari) {
        if (err) {
            res.json(err);
        } else {
            res.json(comentari);
        }
    });
});

comentarios.route('/enviar').post(function (req, res) {
    // console.log("enviando");
    const today = new Date()
    const fecha = today.getDay() + '-' + today.getMonth() + '-' + today.getFullYear() + ' a las ' + today.getHours() + ':' + today.getMinutes();

    const coment = {
        autor: req.body.email,
        titulo: req.body.titulo,
        puntuacion: req.body.puntuacion,
        contenido: req.body.contenido,
        creado: fecha
    }
    Comentario.create(coment)
        .then(comentario => {
            res.json({
                status: 'Comentario enviado'
            })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});


module.exports = comentarios