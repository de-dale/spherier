module.exports = {
   entry: {
      'de-dale.cards': './src/import.de-dale.cards.js',
   },
   output: {
      filename: '[name].js',
      path: __dirname + '/assets/js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
                        use: {
               loader: 'babel-loader',
               query: {
                  presets: [
                     '@babel/preset-env',
                     '@babel/preset-react'
                  ]
               }
            }
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
                  options: {
                     modules: true,
                     localIdentName: '[local]'
                  }
               }
            ]
         },
      ]
   }
};