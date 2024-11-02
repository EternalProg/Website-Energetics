const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const basicConfig = require('./webpack.config');

const config = {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin(), new Dotenv()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]',
                // namedExport: true, case 1;
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      path: false,
      os: false,
      crypto: false,
    },
  },
};

module.exports = merge(basicConfig, config);
