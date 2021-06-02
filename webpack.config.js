const path = require('path');
const webpack = require('webpack');
const uglifyJsPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './app/src/js/script.js',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    ExtractTextPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(sass)$/,
                use: [
                    ExtractTextPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    ExtractTextPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../fonts/',
                    emitFile: false,
                }
            },
            {
                test: /\.(svg|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../img/',
                    emitFile: false,
                }
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'css/style.min.css'
        })
    ],
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/app/build',
        publicPath: '/',
        filename: 'js/script.js'
    },
    devServer: {
        contentBase: './'
    }
};
