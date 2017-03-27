const path = require('path')
const BUILD_DIR = path.join(__dirname, 'public')
const APP_DIR = path.join(__dirname, 'src/client')

const config = {
  entry: path.join(APP_DIR, '/app.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}

module.exports = config
