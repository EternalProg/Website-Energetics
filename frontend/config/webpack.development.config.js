const { merge } = require('webpack-merge');
const basicConfig = require('./webpack.config');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]', // Налаштування іменування файлів
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: `[name]_[local]--[hash:base64:5]`,
                namedExport: false,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(basicConfig, config);
