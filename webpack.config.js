const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        watchFiles: ["./src/template.html"],
        static: "./dist",
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
        })
    ],
    module: {
        rules: [
            {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    },
 {
        test: /\.modules\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use:[
            "style-loader",
            {
                loader: "css-loader",
                options: {modules: true},
                },
            ],
        },
        {
            test: /\.css$/i,
            exclude: /\.modules\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    },
],
},
resolve: {
    extensions: ['.js', '.json'],
},
};
