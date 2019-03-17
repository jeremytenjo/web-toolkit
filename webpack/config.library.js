var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './features/features.index.js',
  output: {
    path: `${process.cwd()}/build`,
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
