const path = require("path");



module.exports={
    entry: "./src/index.js",
    output:{
        path: path.resolve(".","build"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        // rules: [{ test: /\.css$/,use: ["style-loader","css-loader"]}],
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },{ test: /\.css$/,use: ["style-loader","css-loader"]}]
       
    },
   
    
}