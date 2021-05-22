/* eslint-disable no-undef */
const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PATHS = {
  src: path.join(__dirname),
};

var config = {
  entry: {
    common: ["./src/scss/dark-mode.scss", "./src/scss/bootstrap.scss"],
    "style-light": ["./src/scss/styles.scss", "./src/scss/header.scss"],
    "style-dark": [
      "./src/scss/styles-dark.scss",
      "./src/scss/header-dark.scss",
    ],
    app: "./src/js/scripts.js",
    fontawesome: "./src/js/fontawesome.js",
    project: "./src/js/project.js",
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
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            extractComments: true,
        }),
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
  //DEV
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  //Purge css on production
  if (argv.mode === "production") {
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/*`, { nodir: true }),
        content: ["index.html"],
        variables: true,
      })
    );
  }
  return config;
};
