const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: ['.src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            // include: [resolve('src'), resolve('test')]
        }
    ],
    resolve: {

    },
    plugins: [
        // new HtmlWebpackPlugin(HtmlWebpackPluginConfig), // 生成首页html5文件
        // new webpack.DefinePlugin({BJ: JSON.stringify('北京'),})
    ],
    devServer: {
        //progress只在命令行用，不在配置文件中配
        // contentBase: path.resolve(__dirname, "../dist/"), //网站的根目录为 根目录/dist，如果没有指定，使用process.cwd()函数取当前工作目录，工作目录>npm run dev
        port: 9000, //端口改为9000
        open: true, // 自动打开浏览器
        // index: 'front.html', // 与HtmlWebpackPlugin中配置filename一样
        inline: true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot: false,
        compress: true //压缩
    }
}