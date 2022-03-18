var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'Card.js',
      libraryTarget: 'umd',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: false,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
      usedExports: true,
    },
    externals: ['react', 'react-dom'],
    performance: {
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sass|css)$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
