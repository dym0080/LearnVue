/**
 * Created by Administrator on 2017/3/17.
 */

var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by duanyongming')
    ]
}
