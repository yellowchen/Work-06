// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';

import { IconContext } from 'react-icons';
import * as Fa6Icon  from "react-icons/fa6";
import * as GrIcon from "react-icons/gr";
import { Images } from 'src/assets';
import { NavList } from '../../data/ListData';
import Cart from 'src/page/Cart';
// import BreadCrumb from './BreadCrumb';



const Navbar = () => {

	//change class (最初設定)
	const [menu_class, setMenuClass] = useState("nav-menu");
	const [bread_class, setBreadClass] = useState("bread-menu");

	//toggle
	//sidebar定義是側邊攔，預設是false
	//click後：sidebar變true(會顯現)、bread變X
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
				size: "36px",
				color: "#fff",
			}}
		>
			<div className='nav title'>
				{/* 01 nav-logo */}
				<div className='nav-logo'>
					<NavLink className='logo' to='/'>
						<img src={Images.logo} alt='' />
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
						<GrIcon.GrUserManager />
					</NavLink>
				</ul>
				{/* 03 nav-side */}
				<div className='nav-side'>
					<NavLink to='/cart' className='cart'>
						<Fa6Icon.FaCartShopping />
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