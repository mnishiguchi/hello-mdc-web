const autoprefixer = require('autoprefixer')

// https://material.io/develop/web/getting-started
module.exports = [
  {
    mode: 'development',
    entry: ['./assets/scss/app.scss', './assets/js/app.js'],
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css'
              }
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ['./node_modules']
                }
              }
            }
          ]
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        }
      ]
    }
  }
]
