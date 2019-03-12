const path = require('path')

// 1. add folder root ensure starts with ./ and ends with /
const folderName = './features/Forms/Ui/Input/'
// 2. name of file name
const compName = 'input'

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
  // 3. add dependencies eg styled-compoentns: 'commonjs styled-componente'
  // Dependencies of components, ensures they are not compiled dependning on the user to have them, it saves space
  externals: {
    react: 'commonjs react',
  },
}
