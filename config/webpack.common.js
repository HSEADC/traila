const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const htmlPages = require("./webpack.pages.js");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
    allStyles: "./src/javascripts/allStyles.js",
    searchVanilla: "./src/javascripts/search-vanilla.js",
    tests: "./src/javascripts/tests.js",
    result_tests: "./src/javascripts/result_tests.js",
    test_ForestExam: "./src/javascripts/test_ForestExam.js",
    test_Help: "./src/javascripts/test_Help.js",
    test_CalmMovement: "./src/javascripts/test_CalmMovement.js",
    test_Route: "./src/javascripts/test_Route.js",
    test_WhatToTake: "./src/javascripts/test_WhatToTake.js",
    test_Observation: "./src/javascripts/test_Observation.js",
    test_Mushrooms: "./src/javascripts/test_Mushrooms.js",
    test_WhereToGo: "./src/javascripts/test_WhereToGo.js",
    test_ForestSet: "./src/javascripts/test_ForestSet.js",
    widows: "./src/javascripts/widows.js",
    calendardata: "./src/javascripts/calendar-data.js",
    calendar: "./src/javascripts/calendar.js",
    // после не правила
    sectionArticles: "./src/javascripts/sectionArticles.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages,
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/images"),
          to: "images",
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(__dirname, "../src/articles_download"),
          to: "articles_download",
          noErrorOnMissing: true,
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/share/CNAME"),
          to: path.resolve(__dirname, "../docs"),
        },
      ],
    }),
  ],
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};
