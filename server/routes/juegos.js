const express = require('express');
const juegos = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Juego = require('../models/Juego');
const Jugados = require('../models/Jugados');

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

juegos.route('/no').get(function (req, res) {
    Juego.find({
        categoria: "acción"
    }, function (err, juego) {
        if (err) {
            res.json(err);
        } else {
            res.json(juego);
        }
    });
});

// juegos.route('/nojugados').get(function (req, res) {
//     Juego.find(function (err, juego) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(juego);
//         }
//     });
// });

// juegos.route('/nojugados').post(function (req, res) {
//     let email = req.param.email;
//     var result;

//     // Jugados.find({
//     //         categoria: {
//     //             $eq: "acción"
//     //         },
//     //         usuario: {
//     //             $eq: email
//     //         }
//     //     },
//     //     function (err, juego) {
//     //         if (err) console.log(err);
//     //         else result = juego;
//     //     });
//     // res.send(result)
//     Juegos.find({
//             categoria: {
//                 $eq: "acción"
//             }
//         },
//         function (err, juego) {
//             if (err) {
//                 res.json(err);
//             } else {
//                 res.json(juego);

//             }
//         });
// })



module.exports = juegos