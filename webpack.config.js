const webpack = require('webpack')
const path = require('path')
const postcssPresetEnv = require('postcss-preset-env') // optional; for example (below)

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'raw-loader',
          {
            loader: 'postcss-loader',
            // This is optional; just showing an example of a plugin w/ options
            options: {
              plugins: () => [postcssPresetEnv({ 'nesting-rules': true })],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
}

module.exports = config
