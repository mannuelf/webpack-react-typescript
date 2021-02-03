const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlug = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlWebpackPlug
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        hot: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // Creates `style` nodes from JS strings
                    "css-loader",   // Translates CSS into CommonJS
                    "sass-loader",  // Compiles Sass to CSS
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
}