import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';

//import '@styles/global.css';


const App = () => {
	const initialState = useInitialState();
	return (
		<Route exact path="/" element={<Home/>} />

	);
}

export default App;