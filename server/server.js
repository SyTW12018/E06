const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-proyecto', {useNewUrlParser: true})
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err));

//Settings
app.set ('port', process.env.PORT || 5000); 

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use('/users', require('./routes/users.js'));

//Static files

//Server is listening 
app.listen(app.get('port'), () => {
	console.log('Server is running on port', app.get('port'));
});