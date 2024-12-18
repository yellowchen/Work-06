// import React from "react";
import { Routes, Route } from "react-router-dom";

//css
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/all.scss";

//component
import Front from "./page/Front";
import Home from "./page/Home";
import Detail from "src/page/Detail";
import { PageList } from './data/ListData';
import { AccountList } from "./data/ListData";
import ProtectedRoutes from "./utils/ProtectedRoutes";


function App() {
	const user = { login: false };
	

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Front />}>
					<Route index element={<Home />} />
					<Route path='product/:slug' element={<Detail />} />
					{PageList.map((item) => (
						<Route key={item.id} path={item.path} element={item.element} />
					))}
					<Route element={<ProtectedRoutes user={user}/>}>
						{AccountList.map((item) => (
							<Route key={item.key} path={item.path} element={item.element}></Route>
						))}
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;