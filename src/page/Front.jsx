import Navbar from "src/components/nav/Navbar";
import Footer from "src/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Front = () => {
    return (
		<div className="wrapper">
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Front;