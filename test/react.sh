#!/bin/bash
mkdir $1
cd $1
npm init -y
npm install react react-dom

mkdir public
mkdir src
cd src
mkdir assets
mkdir components
mkdir containers
mkdir context
mkdir hooks
mkdir pages
mkdir routes
mkdir styles

cd context
ARCHIVO=AppContext.js
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const AppContext = React.createContext({});" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default AppContext;" >> $ARCHIVO
cd ..

cd hooks
ARCHIVO=useInitialState.js
touch $ARCHIVO
echo 'import { useState } from "react";' >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const initialState = {" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "}" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const useInitialState = () => {" >> $ARCHIVO
echo "	const [state, setState] = useState(initialState);" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "	return {" >> $ARCHIVO
echo "		state," >> $ARCHIVO
echo "	}" >> $ARCHIVO
echo "}" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default useInitialState;" >> $ARCHIVO
cd ..

cd containers
ARCHIVO=Layout.jsx
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const Layout = ({ children }) => {" >> $ARCHIVO
echo "    return (" >> $ARCHIVO
echo "        <div>" >> $ARCHIVO
echo "            {children}" >> $ARCHIVO
echo "        </div>" >> $ARCHIVO
echo "    );" >> $ARCHIVO
echo "};" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default Layout;" >> $ARCHIVO
cd ..

cd pages
ARCHIVO=Home.jsx
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const Home = () => {" >> $ARCHIVO
echo "    return (" >> $ARCHIVO
echo "        <div>" >> $ARCHIVO
echo "            <h1>Hola Mundo</h1>" >> $ARCHIVO
echo "        </div>" >> $ARCHIVO
echo "    );" >> $ARCHIVO
echo "};" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default Home;" >> $ARCHIVO
cd ..

cd routes
ARCHIVO=App.jsx
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "import { BrowserRouter, Routes, Route } from 'react-router-dom';" >> $ARCHIVO
echo "import AppContext from '@context/AppContext';" >> $ARCHIVO
echo "import Layout from '@containers/Layout';" >> $ARCHIVO
echo "import Home from '@pages/Home';" >> $ARCHIVO
echo "import useInitialState from '@hooks/useInitialState';" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "const App = () => {" >> $ARCHIVO
echo "    const initialState = useInitialState();" >> $ARCHIVO
echo "    return (" >> $ARCHIVO
echo "        <AppContext.Provider value={initialState}>" >> $ARCHIVO
echo "            <BrowserRouter>" >> $ARCHIVO
echo "                <Layout>" >> $ARCHIVO
echo "                    <Routes>" >> $ARCHIVO
echo '                        <Route exact path="/" element={<Home/>} />' >> $ARCHIVO
echo '                        <Route path="*" element={<Home/>} />' >> $ARCHIVO
echo "                    </Routes>" >> $ARCHIVO
echo "                </Layout>" >> $ARCHIVO
echo "            </BrowserRouter>" >> $ARCHIVO
echo "        </AppContext.Provider>" >> $ARCHIVO
echo "    );" >> $ARCHIVO
echo "};" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "export default App;" >> $ARCHIVO

cd ..
ARCHIVO=index.js
touch $ARCHIVO
echo "import React from 'react';" >> $ARCHIVO
echo "import ReactDOM from 'react-dom';" >> $ARCHIVO
echo "import App from '@routes/App';" >> $ARCHIVO
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
#echo '    ",plugins": [' >> $ARCHIVO
#echo '        "@babel/plugin-transform-runtime"' >> $ARCHIVO
#echo '    ]' >> $ARCHIVO
echo '}' >> $ARCHIVO

ARCHIVO=webpack.config.js
touch $ARCHIVO
echo "const path = require('path');" >> $ARCHIVO
echo "const HtmlWebpackPlugin = require('html-webpack-plugin');" >> $ARCHIVO
echo "const MiniCssExtractPlugin = require('mini-css-extract-plugin');" >> $ARCHIVO
echo "" >> $ARCHIVO
echo "module.exports = {" >> $ARCHIVO
echo "    entry: './src/index.js'," >> $ARCHIVO
echo "    output: {" >> $ARCHIVO
echo "        path: path.resolve(__dirname, 'dist')," >> $ARCHIVO
echo "        filename: 'bundle.js'," >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "	mode: 'development'," >> $ARCHIVO
echo "    resolve: {" >> $ARCHIVO
echo "        extensions:['.js','.jsx']," >> $ARCHIVO
echo "        alias: {" >> $ARCHIVO
echo "            '@components': path.resolve(__dirname,'src/components')," >> $ARCHIVO
echo "            '@containers': path.resolve(__dirname,'src/containers')," >> $ARCHIVO
echo "            '@context': path.resolve(__dirname,'src/context')," >> $ARCHIVO
echo "            '@hooks': path.resolve(__dirname,'src/hooks')," >> $ARCHIVO
echo "            '@pages': path.resolve(__dirname,'src/pages')," >> $ARCHIVO
echo "            '@routes': path.resolve(__dirname,'src/routes')," >> $ARCHIVO
echo "            '@styles': path.resolve(__dirname,'src/styles')," >> $ARCHIVO
echo "        }" >> $ARCHIVO
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
echo "            }," >> $ARCHIVO
echo "            {" >> $ARCHIVO
echo "                test: /\.(css|scss)$/," >> $ARCHIVO
echo "                use: [" >> $ARCHIVO
echo '                    "style-loader",' >> $ARCHIVO
echo '                    "css-loader",' >> $ARCHIVO
echo '                    "sass-loader",' >> $ARCHIVO
echo "                ]," >> $ARCHIVO
echo "            }," >> $ARCHIVO
echo "            {" >> $ARCHIVO
echo "                test: /\.(png|svg|jpg|gif)$/," >> $ARCHIVO
echo "                type: 'asset'" >> $ARCHIVO
echo "            }," >> $ARCHIVO
echo "        ]" >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "    plugins: [" >> $ARCHIVO
echo "        new HtmlWebpackPlugin({" >> $ARCHIVO
echo "      		template: './public/index.html', " >> $ARCHIVO
echo "      		filename: './index.html'  " >> $ARCHIVO
echo "        })," >> $ARCHIVO
echo "        new MiniCssExtractPlugin({" >> $ARCHIVO
echo "            filename: '[name].css'" >> $ARCHIVO
echo "        })," >> $ARCHIVO
echo "    ]," >> $ARCHIVO
echo "    devServer: {" >> $ARCHIVO
echo "        static: path.join(__dirname, 'dist')," >> $ARCHIVO
echo "        compress: true," >> $ARCHIVO
echo "        historyApiFallback: true," >> $ARCHIVO
echo "        port: 3005," >> $ARCHIVO
echo "        open: true," >> $ARCHIVO
echo "    }," >> $ARCHIVO
echo "}" >> $ARCHIVO

npm install react-router-dom

# Para trabajar con Estilos
npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D

# Para trabajar con APIs
npm install @babel/plugin-transform-runtime
npm install axios

npm set-script start "webpack serve --open"
npm set-script build "webpack --mode production"

npm run start