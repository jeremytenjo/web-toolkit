const path = require('path')

const folderName = './features/Navigation/Navbar/'
const compName = 'navBar'

module.exports = {
  entry: `${folderName}${compName}.index.js`,
  output: {
    path: path.resolve(folderName, 'dist'),
    filename: `${compName}.dist.js`,
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
  // Dependencies of components, ensures they are not compiled dependning on the user to have them, it saves space
  externals: {
    react: 'commonjs react',
    'styled-components': 'commonjs styled-components',
  },
}
