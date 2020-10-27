const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./lib/puzzle.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};
