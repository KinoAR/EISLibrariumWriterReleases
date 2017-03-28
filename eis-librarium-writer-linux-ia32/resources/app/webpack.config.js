var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devServer: {
    inline:true,
    hot:true,
  },
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./components/components.js",
  module: {
    target: "electron",
    loaders: [
      {
        test:/\.js?$/,
        exclude:/(node_modules | bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', ['es2015']],
          plugins: ['react-html-attrs']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    publicPath: `js`,
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
