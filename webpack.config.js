
//Archivo de configuración para convertir todo el código de vue.js a javascript
//debido a que no entiende el código en vuejs por eso lo convierte en javascript
var path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

	entry: './src/app/index.js',
	output: {
		path: __dirname + '/src/public/js',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
