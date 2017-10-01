import * as webpack from 'webpack';
import * as path from 'path';

// Plugins
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
  },

  devServer: {
    hot: true,
    inline: true,
  },

  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: [
          'react-hot-loader/webpack',
          {
            loader: 'awesome-typescript-loader',
            options: { useCache: true, sourceMap: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
