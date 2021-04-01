const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';


module.exports =[
  {
    mode: "development",
    devtool: 'source-map',
  
    entry: './src/index.js',
    output: {
      filename: 'js/index.js',
      path: path.resolve(__dirname, 'public')
    },
  
    module: {
      rules:[
        // bị compile 2 lần . đám ở dưới hoặc cái này ( 1 trong 2 )
        // {
        //   test : /\.html$/i,
        //   use: {
        //     loader: 'file-loader',
        //   },
        // },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test : /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options : {
                name : 'img/[name].[ext]',
              }
            },
          ],
        },
      ],
      
    },
    
    plugins : [
      new HtmlWebpackPlugin({
        filename : "index.html",
        template : "./src/index.html"
      }),
      new CopyPlugin({
        patterns : [
          {
            from : "src/svg/sprite.svg",
            to : "svg/sprite.svg",
            toType : "file",
          }
        ]
      })
    ],
  
    devServer: {
      contentBase: './public'
    },
  
  },
  {
    mode: "development",
    devtool: 'source-map',
    module: {
      rules:[
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test : /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options : {
                name : 'img/[name].[ext]',
              }
            },
          ],
          
        },
      ],
    },
    
    entry: './src/detail.js',
    output: {
      filename: 'js/detail.js',
      path: path.resolve(__dirname, 'public'),
    },
  
    plugins : [
      new HtmlWebpackPlugin({
        filename : "detail.html",
        template : "./src/detail.html"
      }),
    ],
  
   
  }
]