#!/bin/bash
mkdir $1
cd $1
npm init -y
npm install react react-dom

mkdir public
mkdir src
cd src
mkdir components
cd components

ARCHIVO=App.jsx
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const App = () => {" >> $ARCHIVO
echo "    return (" >> $ARCHIVO
echo "        <div>" >> $ARCHIVO
echo "            <h1>Hola Mundo</h1>" >> $ARCHIVO
echo "        </div>" >> $ARCHIVO
echo "    );" >> $ARCHIVO
echo "};" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default App;" >> $ARCHIVO

cd ..
ARCHIVO=index.js
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "import ReactDOM from 'react-dom';" >> $ARCHIVO
echo "import App from './components/App';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "ReactDOM.render(<App />, document.getElementById('app'));" >> $ARCHIVO

cd ..
cd public
ARCHIVO=index.html
touch $ARCHIVO

echo '<!DOCTYPE html>' >> $ARCHIVO
echo '<html lang="en">' >> $ARCHIVO
echo '<head>' >> $ARCHIVO
echo '    <meta charset="UTF-8">' >> $ARCHIVO
echo '    <meta http-equiv="X-UA-Compatible" content="IE=edge">' >> $ARCHIVO
echo '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' >> $ARCHIVO
echo '    <title>React shop</title>' >> $ARCHIVO
echo '</head>' >> $ARCHIVO
echo '<body>' >> $ARCHIVO
echo '    <div id="app"></div>' >> $ARCHIVO
echo '</body>' >> $ARCHIVO
echo '</html>' >> $ARCHIVO

npm install @babel/core @babel/preset-env @babel/preset-react
npm install webpack webpack-cli webpack-dev-server
npm install babel-loader html-loader html-webpack-plugin

cd ..
ARCHIVO=.gitignore
touch $ARCHIVO
echo "node_modules/" >> $ARCHIVO

ARCHIVO=.babelrc
touch $ARCHIVO
echo '{' >> $ARCHIVO
echo '    "presets": [' >> $ARCHIVO
echo '        "@babel/preset-env",' >> $ARCHIVO
echo '        "@babel/preset-react"' >> $ARCHIVO
echo '    ]' >> $ARCHIVO
#echo '    "plugins": [' >> $ARCHIVO
#echo '        "@babel/plugin-transform-runtime"' >> $ARCHIVO
#echo '    ]' >> $ARCHIVO
echo '}' >> $ARCHIVO

ARCHIVO=webpack.config.js
touch $ARCHIVO
echo "const path = require('path');" >> $ARCHIVO
echo "const HtmlWebpackPlugin = require('html-webpack-plugin');" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "module.exports = {" >> $ARCHIVO
echo "    entry: './src/index.js'," >> $ARCHIVO
echo "    output: {" >> $ARCHIVO
echo "        path: path.resolve(__dirname, 'dist')," >> $ARCHIVO
echo "        filename: 'bundle.js'," >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "	mode: 'development'," >> $ARCHIVO
echo "    resolve: {" >> $ARCHIVO
echo "        extensions:['.js','.jsx']" >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "    module: {" >> $ARCHIVO
echo "        rules : [" >> $ARCHIVO
echo "            {" >> $ARCHIVO
echo "                test: /\.(js|jsx)$/," >> $ARCHIVO
echo "                use: { loader: 'babel-loader'}," >> $ARCHIVO
echo "                exclude: /node_modules/" >> $ARCHIVO
echo "            }," >> $ARCHIVO
echo "            {" >> $ARCHIVO
echo "                test: /\.html$/," >> $ARCHIVO
echo "                use: [{ loader: 'html-loader'}]" >> $ARCHIVO
echo "           }" >> $ARCHIVO
echo "        ]" >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "    plugins: [" >> $ARCHIVO
echo "        new HtmlWebpackPlugin(" >> $ARCHIVO
echo "		{ " >> $ARCHIVO
echo "      		template: './public/index.html', " >> $ARCHIVO
echo "    		filename: './index.html'  " >> $ARCHIVO
echo "		}" >> $ARCHIVO
echo "	)" >> $ARCHIVO
echo "	]" >> $ARCHIVO
echo "}" >> $ARCHIVO

npm install css-loader --save-dev
npm install sass --save-dev
npm i mini-css-extract-plugin --save-dev
npm install style-loader --save-dev

npm set-script start "webpack serve --open"
npm set-script build "webpack --mode production"