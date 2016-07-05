const webpack = require('webpack');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const createConfig = require('./shared');

module.exports = createConfig({
  devtool: 'eval',
  prefixes: [
    'react-hot-loader/patch'
  ],
  plugins: [
    new VisualizerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
