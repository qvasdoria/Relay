const Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = Encore.isProduction();

const sourcePath = path.resolve('./');
const outputPath = path.resolve('../public');

const publicPath = path.resolve('/bundles/asdoriarelay');
const manifestKeyPrefix = 'public/bundles/asdoriarelay';
const jsPath  = path.join(sourcePath, '/js');
const cssPath = path.join(sourcePath, '/css');

Encore
    .cleanupOutputBeforeBuild()
    .setPublicPath(publicPath)
    .setOutputPath(outputPath)
    .enableSingleRuntimeChunk()
    .addEntry('app',
        [
            path.join(jsPath, '/index.js'),
            path.join(cssPath, '/app.scss')
        ]
    )
    .enableSassLoader()
    .enablePostCssLoader()
    .enableSourceMaps(!isProduction)
    .enableVersioning(isProduction)
    .setManifestKeyPrefix(manifestKeyPrefix)
    .enableVersioning(Encore.isProduction())

    .configureFilenames({
        js  : './js/[name].min.js',
        css : './css/[name].min.css',
        images: './images/[name].[ext]'
    })
    .addPlugin(
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    )
    .addPlugin(
        new webpack.DefinePlugin(
            { 'process.env': { 'NODE_ENV': JSON.stringify('production') } }
        )
    )
;

const config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
    ignored: /node_modules/
};


module.exports = config;
