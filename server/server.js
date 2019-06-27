const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require("path")

const app = express();

app.use(cors({
	origin: true,
	credentials: true
}));

app.use(express.static(path.join(__dirname, '/dist')))
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist'));
})


// mongoose.connect('mongodb://asa:sytw19@ds239157.mlab.com:39157/mevn-proyecto', {
mongoose.connect('mongodb://localhost/mevn-proyecto', {

		useNewUrlParser: true
	})
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err));

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: false
}))

//Routes
app.use('/users', require('./routes/users.js'));
app.use('/juegos', require('./routes/juegos.js'));
app.use('/jugados', require('./routes/jugados.js'));


//Static files

//Server is listening 
const server = app.listen(app.get('port'), () => {
	console.log('Server is running on port', app.get('port'));
});

module.exports = server