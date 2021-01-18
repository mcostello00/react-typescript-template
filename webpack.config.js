const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "development",

  // entry files
  entry: "./src/index.ts",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin({cleanStateWebpackAssets:false}),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
