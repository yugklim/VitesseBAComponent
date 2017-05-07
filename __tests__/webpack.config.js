var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: [
    'webpack-hot-middleware/client',
    "babel-polyfill"
  ],
  resolve: {
    modulesDirectories: [
      path.join(__dirname, "./node_modules")
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(path.normalize(__dirname ))
        ],
        exclude: [
          /node_modules/
        ],
        test: /\.js$/,
        plugins: ['transform-runtime']
      }
    ]
  }
};
