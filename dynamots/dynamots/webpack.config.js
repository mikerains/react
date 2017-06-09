﻿//
// https://webpack.js.org/concepts/hot-module-replacement/
// https://webpack.js.org/guides/hmr-react/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: "cheap-eval-source-map",
    target: 'web',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/index.tsx'
        // the entry point of our app
    ],
    output: {
        //filename: 'bundle.js',
        filename: '[name].[hash].js',
        // the output bundle

        path: path.resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/',
        // match the output `publicPath`

        historyApiFallback: true
    },


    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", },
            {
                test: /\.jsx?$/,
                use: ['babel-loader', ],
                exclude: /node_modules/
            },
            {
                // error: "No PostCSS Config found in: C:\projects\mike\rxasync\src\components" 
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader?modules', 'postcss-loader',],

                // solution: --> https://github.com/postcss/postcss-loader/issues/92#issuecomment-280878821
                // another solution: https://github.com/akveo/ng2-admin/issues/604
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },


                    {
                        loader: 'postcss-loader', options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                ]
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new HtmlWebpackPlugin({
            title: 'Hot Module Reddit',
            template: './src/myindex.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })
        //, new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } })
    ],
}