import { Routes, Route } from "react-router-dom";
import "./styles/all.scss";

//component
import Front from "./page/Front";
import Home from "./page/Home";
import { PageList, AccountList } from './data/ListData';
import ProtectedRoutes from "./utils/ProtectedRoutes";


function App() {
	const user = { login: false };
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Front />}>
					<Route index element={<Home />} />
					{PageList.map((item) => (
						<Route key={item.id} path={item.path} element={item.element} />
					))}
					<Route element={<ProtectedRoutes user={user}/>}>
						{AccountList.map((item) => (
							<Route key={item.id} path={item.path} element={item.element}></Route>
						))}
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;