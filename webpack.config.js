const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
   entry: "./src/js/index.js",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         { 
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"],
         }
      ]
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
      }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
         title: "KeithxClaire",
         template: "src/index.html"
      })
   ],
   mode: "production",
};