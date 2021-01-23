const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
                /*{
                    test: /\.js$/,
                    loader: "buble-loader",
                    include: path.join(__dirname, "src"),
                    options: {
                        presets: [
                            ["es2015"]
                        ],
                        objectAssign: "Object.assign",
                        transforms: {
                            modules: false,
                            dangerousForOf: true,
                            asyncAwait: false,
                        },
                    },
                },*/
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
       /* optimization: {
            minimize: true,
            minimizer: [
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin(),
            // new UglifyJsPlugin(),
            ],
        },*/
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
