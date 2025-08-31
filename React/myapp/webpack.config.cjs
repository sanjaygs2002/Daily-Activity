// webpack.config.js
const path = require("path");   // ✅ fix here
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");


module.exports = {
  mode: "production",
  entry: "./src/main.jsx",   // ✅ change if your entry file is main.js instead of index.js
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"], // ✅ allow importing jsx without extension
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // ✅ handle both .js and .jsx
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
     new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  
};
