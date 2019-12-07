const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
/* const WebpackShellPlugin = require('webpack-shell-plugin'); */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 3000,
    watchContentBase: true,
    // progress: true
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              /*
              modules: {
                mode: 'local',
                localIdentName:
                  '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              }, */
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      } /*
      {
        test: /\.(svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      }, */,
      {
        test: /\.mp3$/,
        use: 'base64-inline-loader?name=[name].[ext]',

        /* use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'audio/',
            },
          },
        ], */
      },
    ],
  },
  plugins: [
    /* new WebpackShellPlugin({ onBuildEnd: ['rm dist/*.js'] }), */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inlineSource: '.js$',
      minify: {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeComments: true,
        useShortDoctype: true,
        removeRedundantAttributes: true,
      },
    }),

    new HtmlWebpackInlineSourcePlugin(),
  ],
};
