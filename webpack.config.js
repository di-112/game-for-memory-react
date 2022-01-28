const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const getFileName = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`)

const getCssLoaders = extra => {
  const loaders = [isDev ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader']
  if (extra) loaders.push(extra)
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFileName('js'),
    assetModuleFilename: 'images/[hash][ext]',
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin(),
    ],
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.svg',
      cache: isDev,
    }),
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|mp3|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: getCssLoaders(),
      },
      {
        test: /\.less/i,
        use: getCssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss/i,
        use: getCssLoaders('sass-loader'),
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
}
