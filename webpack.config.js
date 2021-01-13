const path = require('path')
const webpack = require('webpack')
const glob = require('glob');
const autoprefixer = require('autoprefixer')
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const packagejson = require('./package.json')

const baseConfig = {
  rootPath: __dirname,
  srcPath: path.resolve(__dirname, './src/')
}
const prodConfig = {
  outputPath: path.join(baseConfig.rootPath, './dist/')
}
const isDev = process.env.NODE_ENV === 'dev'
const entries = getEntry('./src/**/index.js')
entries.vendor = ['react', 'react-dom', 'classnames']
// entries.product = path.resolve(baseConfig.srcPath, 'product.js')
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: 
  // {
  //   "vendor": Object.keys(packagejson.dependencies),
  //   'product': path.resolve(baseConfig.srcPath, 'product.js')
  // },
  entries,
  // {
  //   monitorCenter: `${baseConfig.srcPath}/monitor-center/index.js`,
  //   itConsult: `${baseConfig.srcPath}/it-consult/index.js`,
  //   perspective: `${baseConfig.srcPath}/perspective/index.js`,
  //   auto: `${baseConfig.srcPath}/auto/index.js`,
  // },
  output: {
    filename: '[name].js',//isDev ? '[name].js' : '[name].bundle.js',
    path: path.join(baseConfig.rootPath, '/dist/'),//isDev ? path.join(baseConfig.rootPath, '/dev/') : prodConfig.outputPath,
    publicPath: '/dist/'//isDev ? '/dev/' : '/dist/',
  },
  node: {
    fs: 'empty'
  },
  optimization: {
    minimizer: [
      !isDev && new TerserPlugin({
        cache: true,
        sourceMap: isDev
      }),
      !isDev && new OptimizeCSSAssetsPlugin()
    ].filter(Boolean),
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /react/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }

  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        enforce: 'post',
        include: path.join(baseConfig.rootPath, '/src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: !isDev
                ? '[folder]_[hash:base64:10]'
                : '[folder]_[local]_[hash:base64:5]',
              },
              localsConvention: 'dashes'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/'
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            }
          },

        ]
      },
      {
        test: /\.(jpg|png|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: isDev
              ? 'image/[name].[ext]'
              : 'image/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    !isDev && new CleanPlugin(),
    !isDev && new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    isDev && new webpack.NamedModulesPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),

  devServer: {
    contentBase: './',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8000,
    hot: true
  },
  devtool: isDev ? 'cheap-eval-source-map' : 'source-map',
  resolve: {
    alias: {
      image: path.relative(baseConfig.rootPath, './image'),
      scss: path.resolve(baseConfig.rootPath, './scss')
    }
  },
  externals: {

  }
}

// 获取入口函数
function getEntry(globPath) {
  let pathName = glob.sync(globPath)
  let pathArr, temp, entries = {}
  
  pathName.filter(val => val.indexOf('components') < 0 ).map(val => {
    pathArr = val.split('/')

    temp = pathArr[2]
    entries[temp] = val
  })
  return entries
}