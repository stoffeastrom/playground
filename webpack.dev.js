const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  entry: ['react-hot-loader/patch', './src/index'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    hot: true,
    inline: true,
  },

  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: 'awesome-typescript-loader',
            options: { useBabel: true, useCache: true, sourceMap: true },
          },
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
    ],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    // }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    // new webpack.DefinePlugin({ // <-- key to reducing React's size
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(), //minify everything
    // new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  ],
};

module.exports = config;
