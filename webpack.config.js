const path = require("path");
const webpack = require("webpack");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "docs")
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
   ],
   mode: "production",
};