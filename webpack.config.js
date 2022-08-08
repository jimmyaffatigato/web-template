const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    },
};
