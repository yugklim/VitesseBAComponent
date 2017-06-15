var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: [
    'webpack-hot-middleware/client',
    "babel-polyfill",
    '.\\index.js'
  ],
  resolve: {
    modulesDirectories: [
      path.join(__dirname, "./node_modules"),
      path.join(__dirname, "../src/node_modules")
    ]
  },
  output: {
    path: path.join(__dirname, '../bundle'),
    filename: 'vitessBAexample.min.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include: [
          path.resolve(path.normalize(__dirname + '\\..'), "src")
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(path.normalize(__dirname )),
          path.resolve(path.normalize(__dirname + '\\..'), "src")
        ],
        exclude: /node_modules/,
        test: /\.js$/,
        plugins: ['transform-runtime']
      }
    ]
  }
};
