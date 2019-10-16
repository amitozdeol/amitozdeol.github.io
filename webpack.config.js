const path = require("path");
var config = {
  entry: {
    app: "./js/scripts.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js"
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
  if (argv.mode != "production") {
    config.devtool = "inline-source-map";
  }
  return config;
};
