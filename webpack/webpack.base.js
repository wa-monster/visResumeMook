const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/notes'),
      '@assets': path.join(__dirname,'../','assets'),
      '@common': path.join(__dirname,'../','app/notes/common')
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
              esModule: false
            },
          },
        ],
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
}