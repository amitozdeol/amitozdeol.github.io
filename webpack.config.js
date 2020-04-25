/* eslint-disable no-undef */
const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname),
};

var config = {
  entry: {
    common: ["./assets/scss/dark-mode.scss", "./assets/scss/bootstrap.scss"],
    "style-light": ["./assets/scss/styles.scss", "./assets/scss/header.scss"],
    "style-dark": [
      "./assets/scss/styles-dark.scss",
      "./assets/scss/header-dark.scss",
    ],
    app: "./assets/js/scripts.js",
    project: "./assets/js/project.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: path.join(__dirname, "build"),
    filename: "js/[name].js",
  },
  devServer: {
    contentBase: "./",
    http2: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  stats: {
    entrypoints: false,
    children: false,
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } }, // translates CSS into CommonJS modules
          "sass-loader", // compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};

module.exports = (env, argv) => {
  if (argv.mode != "production") {
    config.devtool = "inline-source-map";
  }

  //Purge css on production
  if (argv.mode === "production") {
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/*`, { nodir: true }),
        content: ["index.html"],
      })
    );
  }
  return config;
};
