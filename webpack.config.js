const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '#src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.scss', '.css', '.json', '.png',
        '.jpg', '.svg'],
        alias: {
            '@': path.resolve(__dirname, '#src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                },
                    'css-loader',
                    'sass-loader',
                ],
                // include: [path.resolve(__dirname, '#src/scss')],
                sideEffects: true,
            },
            {
                test: /\.(png|jpg|svg|gif|webp|ico)$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]'
                }]
            },
            {
                test: /\.(ttf|woff|woff2|eot|etf)$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]'
                }]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        overlay: true,
        watchContentBase: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyWebPackPlugin({
            patterns: [
                {from: path.resolve(__dirname, '#src/img/**/*.*'),
                to: path.resolve(__dirname, 'dist/')},
                {from: path.resolve(__dirname, '#src/fonts/**/*.*'),
                to: path.resolve(__dirname, 'dist/')}
            ]
        })
    ],
}