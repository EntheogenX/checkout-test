const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'scripts', 'main.js'),
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'public', 'dist', 'js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};