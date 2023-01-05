const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl?/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'stylus-loader'
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}