var webpack = require('webpack'); 

module.exports = {
    entry : [
        "./node_modules/angular/angular.min.js"
    ],
    output : {
        filename : './dist/lib.js'
    },
    resolve : {
        extensions : ['', '.webpack.js', '.web.js', '.ts', '.js', '.min.js']
    },
    module :{
        loaders : [
        //    { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins : [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}

