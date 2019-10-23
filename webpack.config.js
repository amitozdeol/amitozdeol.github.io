const path = require("path");
var config = {
  entry: {
    app: "./js/scripts.js",
    map: "./js/map.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: './',
    http2: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = (env, argv) => {
  config.devtool = argv.mode === "production" ? "eval" : "inline-source-map";
  return config;
};
