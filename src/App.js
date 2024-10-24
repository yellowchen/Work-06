import React from "react";
import { Routes, Route } from "react-router-dom";

//css
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/all.scss";

//component
import Front from "./page/Front";
import Home from "./page/Home";
import Detail from "src/page/Detail";
import { PageList } from './data/ListData';



function App() {
	
	// console.log(typeof PageList[0].name);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Front />}>
					<Route index element={<Home />} />
					<Route path="product/:slug" element={<Detail />} />
					{PageList.map((item) => (
						<Route key={item.id} path={item.path} element={item.element} />
					))}
				</Route>
			</Routes>
		</div>
	);
}

export default App;