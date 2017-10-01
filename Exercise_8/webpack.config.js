module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style!css',
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    },
    ],
  },
};
