import React, {useState} from 'react';

import "./LoginSignup.scss";

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as FcIcons from "react-icons/fc";
import * as Fa6Icons from "react-icons/fa6";


//Google
//一般安裝
//import { GoogleLogin } from "@react-oauth/google";
//import { jwtDecode } from "jwt-decode";

//客製
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginSignup = () => {

	const [action, setAction] = useState("Sign Up");

	//客製安裝google
	const login = useGoogleLogin({
		// onSuccess: tokenResponse => console.log(tokenResponse)
		onSuccess: async(response) => {
			try {
				const res = await axios.get(
					"https://www.googleapis.com/oauth2/v3/userinfo",
					{
						headers: {
							Authorization: `Bearer ${response.access_token}`,
						},
					}
				);
				console.log(res);
			} catch(err) {
				console.log(err);
			}
		}

	});


	return (
		<div className='container'>
			<div className='header'>
				<div className='text'>{action}</div>
				<div className='underline'></div>
			</div>
			<div className='submit-container'>
				<div
					className={action === "Login" ? "submit gray" : "submit"}
					onClick={() => {
						setAction("Sign Up");
					}}
				>
					Sign Up
				</div>
				<div
					className={action === "Sign Up" ? "submit gray" : "submit"}
					onClick={() => {
						setAction("Login");
					}}
				>
					Log In
				</div>
			</div>
			<div className='inputs'>
				{action === "Login" ? (
					<div></div>
				) : (
					<div className='input'>
						<FaIcons.FaUserCircle />
						<input type='text' placeholder='Name' />
					</div>
				)}
				<div className='input'>
					<MdIcons.MdOutlineEmail />
					<input type='email' placeholder='Email Id' />
				</div>
				<div className='input'>
					<RiIcons.RiLockPasswordLine />
					<input type='password' placeholder='Password' />
				</div>
			</div>
			{action === "Sign Up" ? (
				<div></div>
			) : (
				<div className='forgot-password'>
					Lost Password? <span>Click Here</span>
				</div>
			)}
			{action === "Login" ? (
				<div></div>
			) : (
				<div className='quick-login'>
					<div className='login-with'>or login with</div>
					<div className='google-login'>
						{/* normal */}
						{/* <GoogleLogin
							onSuccess={(credentialResponse) => {
								//console.log(credentialResponse);
								const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
								console.log(credentialResponseDecoded);
							}}
							onError={() => {
								console.log("Login Failed");
							}}
						/> */}

						{/* custom */}
						<button onClick={() => login()}>
							Sign in with <FcIcons.FcGoogle style={{ margin: "0 0 0 10px" }} />
						</button>
						<button>
							Sign in with <Fa6Icons.FaLine style={{ margin: "0 0 0 10px" }} color="#00CB42" />
						</button>
						<button>
							Sign in with <Fa6Icons.FaApple style={{ margin: "0 0 0 10px" }} color="#fff" />
						</button>
					</div>
				</div>
			)}
		</div>
	); 
}

export default LoginSignup;
