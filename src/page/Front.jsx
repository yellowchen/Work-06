// import React from "react";
import Navbar from "src/components/nav/Navbar";
import Footer from "src/components/footer/Footer";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
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

export default FrontLayout;