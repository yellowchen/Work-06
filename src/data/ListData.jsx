import React from "react";
import { Navigate } from "react-router-dom";

//Page
import Intro from "src/page/Intro";
import Expo from "src/page/Expo";
import Product from "src/page/Product";

// import Ticket from "src/page/Ticket";
import Cart from "src/page/Cart";
import Login from "src/page/Login";
import Checkout from "src/page/Checkout";
import Payment from "src/page/Payment";
import CheckoutSuccess from "src/page/CheckoutSuccess";
import Page404 from "src/page/Page404";


const NavList = [
	{ id: "home", path: "/" },
	{ id: "intro", path: "intro" },
	{ id: "expo", path: "expo" },

	{ id: "product", path: "product" },
];


const PageList = [
	{ id: "intro", path: "intro", element: <Intro /> },
	{ id: "expo", path: "expo", element: <Expo /> },

	{ id: "product", path: "product", element: <Product /> },
	{ id: "cart", path: "cart", element: <Cart /> },
	{ id: "login", path: "login", element: <Login /> },
	{ id: "checkout", path: "checkout", element: <Checkout /> },
	{ id: "payment", path: "payment", element: <Payment /> },
	{ id: "checkoutSuccess", path: "success/:orderId", element: <CheckoutSuccess /> },
	{ id: "notFound", path: "not-found", element: <Page404 /> },
	{ id: "notFound", path: "*", element: <Navigate to='/not-found' /> },
];


export { NavList, PageList };