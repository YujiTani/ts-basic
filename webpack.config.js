const path = require('path');
module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts' , '.js']
    },
    devServer: {
        static: path.join(__dirname , 'dist'),
        open: true
    },
    module: { //modulesに適用するルールを記述
        rules: [
            {
                loader: 'ts-loader', //loaderは何を使うのか
                test: /\.ts$/ //正規表現 .tsで終わるファイルをts-loaderを使ってコンパイル
            }
        ]
    }
}