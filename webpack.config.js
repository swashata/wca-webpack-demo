const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';
const mode = isDev ? 'development' : 'production';

module.exports = {
	// Main entry point
	entry: './src/app.js',
	// Output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
	},

	// How files are handled?
	module: {
		rules: [
			// Add js(x) files with babel
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// pass in options
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									// Let webpack do it's magic by disabling
									// module transform. Not needed but opens
									// up possibilities for tree-shaking etc.
									modules: false,
								},
							],
							[
								// If in dev mode, then pass development for
								// better react debugging
								'@babel/preset-react',
								{
									development: isDev,
								},
							],
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							'react-hot-loader/babel',
						],
						// 💡  disable loading config and babelrc files
						// to prevent conflict from tools like jest.
						// although you should figure out using
						// process.env.BABEL_ENV to figure out how to properly
						// setup config files.
						// 🐻 Task: Remove this whole config and put it in
						// <root>/babel.config.js
						// https://babeljs.io/docs/en/config-files
						// Also take into account for tooling like
						// jest, where we need to enable module transform
						babelrc: false,
						configFile: false,
					},
				},
			},
			// Add css, sass, scss files with node-sass
			// 🐻 Task: Use miniCssExtractPlugin to extract CSS
			{
				test: /\.s?(c|a)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	// How modules are resolved
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	// Plugins
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(mode),
		}),
	],

	// Mode
	mode,

	// No need to specify watch because webpack-dev-server takes care of it

	// sourcemaps
	devtool: isDev ? 'eval' : 'source-map',
};
