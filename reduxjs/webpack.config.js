var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "cheap-eval-source-map",
    
    entry: "./src/index.js",
    // entry: {
    //     page1: "./src/index.js",
    //     page2: "./src/index.js"
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        //filename: '[name].js',
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, 
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    //plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
    plugins: [new HtmlWebpackPlugin()]
}

//module.exports = config;