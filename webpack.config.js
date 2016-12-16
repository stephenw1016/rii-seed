const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';
const filename = isProd ? '[name].[hash].js' : '[name].bundle.js';
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

const config = {

  // The entry point for each bundle.
  entry: isTest ? {} : {
    app: PATHS.app + '/app.js',
    vendor: PATHS.app + '/vendor.js'
  },

  // The distribution directory/destination for generated files
  output: isTest ? {} : {
    path: PATHS.dist,
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: filename,
    chunkFilename: filename,
  },

  // How to resolve module names (ex. 'myComponent' will resolve to 'myComponent.js').
  resolve: {
    modules: ['node_modules', PATHS.app],
    extensions: ['.js']
  },

  // Rules for how files should be processed when imported.
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loaders: ['babel-loader', 'eslint-loader']},
      {
        test: /\.html$/,
        loaders: ['html-loader'],
        query: { minimize: true }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=[name].[ext]&publicPath=app/assets/[ext]/&outputPath=dist/[ext]/'
      }
    ]
  },

  // Set to true if you want webpack to give you tips on bundling performance.
  performance: {
    hints: false
  },

  // Additional processing to imported files can be done via plugins.
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], { verbose: false })
  ]
};

if (isTest) {
  config.devtool = 'inline-source-map';
} else if (isProd) {
  config.devtool = 'source-map';
} else {
  config.devtool = 'eval-source-map';
}

if (!isTest) {
  config.plugins.push(new HtmlWebpackPlugin({ template: path.join(PATHS.app, 'index.html'), inject: 'body' }));
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: filename }));
}

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true,
      sourceMap: true
    })
  );
}

module.exports = config;