var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        "Main": "./src/Main.js",
        "Spec": "./spec/all.js"
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|build|.cache)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2016", "es2015"],
                    cacheDirectory: ".cache"
                }
            }
        ]
    },

    stats: {
        colors: true
    },

    devtool: "source-map"
};