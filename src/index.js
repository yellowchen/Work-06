import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ScrollToTop from "./utils/scrollToTop";
import { Provider } from 'react-redux';
// import AuthProvider from './config/AuthProvider';
import { store } from './features';
import { HashRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <AuthProvider> */}
				<Router>
					<ScrollToTop />
					<App />
				</Router>
			{/* </AuthProvider> */}
		</Provider>
	</React.StrictMode>
);
