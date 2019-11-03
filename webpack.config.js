const path = require("path");
const markdownPlugin = require('markdown-html-webpack-plugin');
console.log(path.resolve(__dirname, "build"));

var config = {
  entry: {
    app: "./assets/js/scripts.js",
    map: "./assets/js/map.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: path.join(__dirname, 'build'),
    filename: "[name].js"
  },
  devServer: {
    contentBase: './',
    http2: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", {
              "targets": {
                "node": "current"
              }
            }]]
          }
        }
      }
    ]
  },
  plugins: [
    new markdownPlugin({
      filePath: '../docs/md',
      exportPath: '../docs/html/',
      isEncodeName: false, // if need to encode file name, like chinese
      template: '../docs/template.html'
    }),
  ]
};
module.exports = (env, argv) => {
  if (argv.mode != "production") {
    config.devtool = "inline-source-map";
  }
  return config;
};
