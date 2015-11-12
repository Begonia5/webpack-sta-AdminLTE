var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Clean = require('clean-webpack-plugin');
var fs = require('fs');
var path = require('path');
var ENTRYPATH = __dirname + '/entry/';
var entry = {};
fs.readdirSync(ENTRYPATH).filter(function(file){
    return !/^\./.test(file);
}).map(function(file){
    file = path.basename(file, '.js');
    entry[file] = ENTRYPATH + file;
});
module.exports = {
    // The standard entry point and output config
    entry: entry,
    output: {
        path : '/Users/Ares/workplace/self/webpack_static/build/',
        publicPath : '/Users/Ares/workplace/self/webpack_static/build/',
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    resolve: {
        root : __dirname,
        alias: {
            'zepto' : __dirname + '/js/lib/zepto.js',
            'widget' : __dirname + '/js/widget',
            'lib' : __dirname + '/js/lib'
        }
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new Clean(['dist', 'build'])
    ]
}