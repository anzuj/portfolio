const webpack = require("webpack");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    publicPath: "./",
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            // fix "process is not defined" error:
            // (do "npm install process" before running the build)
            new webpack.ProvidePlugin({
                process: "process/browser",
            }),
        ],

        resolve: {
            fallback: { path: require.resolve("path-browserify"), fs: false },
        },
    },
/*     pluginOptions: {
     
    }, */
    devServer: {
        port: 8081,
    },
});
