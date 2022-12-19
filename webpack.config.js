const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    }, 
    port: 8080,
    compress: false,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s[ca]ss$/,
        use: ['style-loader', 'css-loader', 'scss-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     esModule: false,
        //   }
        // }
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}