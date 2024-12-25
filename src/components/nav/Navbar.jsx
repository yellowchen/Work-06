// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//icon
import { IconContext } from "react-icons";
import { FaCartShopping } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";

import { Images } from 'src/assets';
import { NavList } from '../../data/ListData';
import Cart from 'src/page/Cart';
import { auth } from 'src/config/firebase';
// import BreadCrumb from './BreadCrumb';


const Navbar = () => {

	console.log(auth);

	//change class (最初設定)
	const [menu_class, setMenuClass] = useState("nav-menu");
	const [bread_class, setBreadClass] = useState("bread-menu");

	//toggle
	//sidebar定義是側邊攔，預設是false(不顯現側邊欄)
	//click後：sidebar變true(會顯現)、bread從三變X
	const [aside, setAside] = useState(false);

	const [totalQuantity, setTotalQuantity] = useState(0);
	const carts = useSelector(store => store.cart.cartItems);
	useEffect(() => {
		let total = 0;
		carts.forEach(item => total += item.quantity);
		setTotalQuantity(total);
	}, [carts]);

	const asideToggle = () => {
		if (!aside) {
			//true
			//這邊aside要是false，反轉才會變成true
			setMenuClass("nav-menu visible");
			setBreadClass("bread-menu clicked");
		} else {
			//false
			setMenuClass("nav-menu");
			setBreadClass("bread-menu");
		}
		setAside(!aside);
		//以aside的相反值去執行
	};

    return (
		<IconContext.Provider
			value={{
				verticalAlign: "middle",
				size: "29px",
				color: "#fff",
			}}
		>
			<div className='nav title'>
				{/* 01 nav-logo */}
				<div className='nav-logo'>
					<NavLink className='logo' to='/'>
						<img src={Images.logo} alt='logo' />
					</NavLink>
				</div>
				{/* 02 nav-menu */}
				<ul className={menu_class} onClick={asideToggle}>
					{NavList.map((item) => (
						<li key={item.id}>
							<NavLink to={item.path}>{item.id}</NavLink>
						</li>
					))}
					<NavLink to='login' className='login'>
						{auth?.currentUser?.displayName ? (
							<div className='user-photo'>
								{auth?.currentUser.photoURL ? (
									<img src={auth?.currentUser.photoURL} alt='user-photo' />
								) : (
									<span>{auth?.currentUser.displayName}</span>
								)}
							</div>
						) : (
							<GrUserManager />
						)}
					</NavLink>
				</ul>
				{/* 03 nav-side */}
				<div className='nav-side'>
					<NavLink to='/cart' className='cart'>
						<FaCartShopping />
						{Cart}
						<span>{totalQuantity}</span>
					</NavLink>
					<NavLink to='#' className='bread-crumb'>
						{/* bread-menu */}
						<div className={bread_class} onClick={asideToggle}>
							<div className='bread-bar'></div>
							<div className='bread-bar'></div>
							<div className='bread-bar'></div>
						</div>
					</NavLink>
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default Navbar;