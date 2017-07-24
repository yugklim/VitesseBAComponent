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
    modules: [
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
          path.resolve(path.normalize(__dirname )),
          path.resolve(path.normalize(__dirname + '\\..'), "src")
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
          path.resolve(path.normalize(__dirname )),
          path.resolve(path.normalize(__dirname + '\\..'), "src")
        ],
        exclude: /node_modules/
      }
    ]
  }
};
