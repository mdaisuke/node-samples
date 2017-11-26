const path = require('path')
module.exports = {
  devServer: {
    contentBase: "./target",
    watchContentBase: true,
    port: 9000,
    open: true,
  },
  devtool: "source-map",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve("./target/"),
    filename: "bundle.js",
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
}
