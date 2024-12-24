import { Navigate } from "react-router-dom";

//Page
import Intro from "src/page/Intro";
import Expo from "src/page/Expo";
import Product from "src/page/Product";
import Detail from "src/page/Detail";

// import Ticket from "src/page/Ticket";
import Cart from "src/page/Cart";
import Login from "src/page/Login";
import Checkout from "src/page/Checkout";
import Payment from "src/page/Payment";
import CheckoutSuccess from "src/page/CheckoutSuccess";
import Page404 from "src/page/Page404";

//icon
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";


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
	{ id: "detail", path: "product/:slug", element: <Detail /> },
	{ id: "login", path: "login", element: <Login /> },
	{ id: "notFound", path: "not-found", element: <Page404 /> },
	{ id: "notFound", path: "*", element: <Navigate to='/not-found' /> },
];

const AccountList = [
	{ id: "cart", path: "cart", element: <Cart /> },
	{ id: "checkout", path: "checkout", element: <Checkout /> },
	{ id: "payment", path: "payment", element: <Payment /> },
	{ id: "checkoutSuccess", path: "success/:orderId", element: <CheckoutSuccess /> },
];

const IconList = [
	{
		id: "fb",
		path: "https://www.facebook.com/?locale=zh_TW",
		icon: <FaSquareFacebook />,
	},
	{
		id: "ig",
		path: "https://www.instagram.com/",
		icon: <RiInstagramFill />,
	},
	{
		id: "tw",
		path: "https://twitter.com",
		icon: <RiTwitterXFill />,
	},
	{
		id: "yt",
		path: "https://www.youtube.com",
		icon: <FaYoutube />,
	},
];


export { NavList, PageList, AccountList, IconList };