const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const config = {
        context: path.resolve(__dirname, "src"),
        mode: "development",
        entry: "/js/main.js",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, "src"),
            }
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new HTMLWebpackPlugin({
                title: "Chart",
                template: "/html/index.html",
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
        ],
        module: {
            rules: [
               {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.pug$/,
                    use: ["pug-loader"],
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "url-loader?limit=100000",
                            options: {
                                name: "./fonts/[name].[ext]",
                                outputPath: "fonts/"
                            }
                        }
                    ]
                }
            ]
       },
    }

    if (argv.mode === "development") {
        console.log(argv.mode);
        config.devtool = "eval-source-map";
        config.plugins.push(
            new webpack.LoaderOptionsPlugin({
                debug: true
            })
        )
    }

    return config
};
