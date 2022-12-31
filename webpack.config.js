const path = require('path');
console.log({__dirname, __filename})
module.exports = {
    entry: './src/index.js',// входной файл
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),// создание пути, resolve -объединение путей (в папку dist закинь файл main)
    },
    devServer: {
        static: './dist',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
};
