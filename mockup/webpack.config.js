let path = require("path"); // nodejs path
let CopyWebpackPlugin = require('copy-webpack-plugin'); // commonjs module
let onServerHostFolder = "";

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: `${onServerHostFolder}`,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },    
    devtool: "source-map", // any "source-map"-like devtool is possible
    devServer: { inline: true },
    plugins:[
        new CopyWebpackPlugin([
            { from: './src/images', to: 'images' }
        ])
    ],
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitError: true,
                    failOnWarning: true,
                    failOnError: true,
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
        ]
    } ,
     
}