var nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: './features/features.index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `index.js`,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          'eslint-loader',
        ],
      },
    ],
  },
  externals: [nodeExternals()],
}
