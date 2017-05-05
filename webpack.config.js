var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: 'source-map',
    context: __dirname,

    entry: [
        './src/index.js'
    ],

    output: {
        path: path.resolve('./dist/js'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: './dist/js/'
    },

    resolve: {
        alias: {
            '~': path.resolve(__dirname)
        },
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015,presets[]=stage-1',
                exclude: /node_modules/,
                include: __dirname
            },
        ]
    },
};
