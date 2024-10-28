import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from "./utils/scrollToTop";

import { Provider } from 'react-redux';
import { store } from './features';
import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter as Router } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GoogleOAuthProvider clientId='659056757940-3qlgsifphlfrpa14bt0e8a62kpogktuu.apps.googleusercontent.com'>
				<Router>
					<ScrollToTop />
					<App />
				</Router>
			</GoogleOAuthProvider>
		</Provider>
	</React.StrictMode>
);
