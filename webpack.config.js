
var config = {
   entry: './Source/main.js',
	
   output: {
      path: __dirname + './Out/',
      publicPath: 'http://localhost:8081/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8081
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;