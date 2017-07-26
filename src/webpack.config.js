var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: [
    //'webpack-hot-middleware/client',
    "babel-polyfill",
    '.\\VitesseBA.js'
  ],
  resolve: {
    modules: [
            path.join(__dirname, "./node_modules")
         ]
  },
  externals: [
    'lodash',
    'mobx', 'mobx-react', 'mobx-react-form',
    'prop-types',
    'radium',
    'react', 'react-dom',
    'react-input-mask',
    'validatorjs'
  ],
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'VitessBA.min.js',
    publicPath: '/static/',
    library: 'VitesseBA',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: [
          path.resolve(path.normalize(__dirname ))
        ],
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(path.normalize(__dirname ))
        ],
        exclude: /node_modules/
      }
    ]
  }
};
