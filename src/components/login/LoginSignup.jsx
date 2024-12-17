import React, {useState} from 'react';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

//icon
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
// import { FaLine } from "react-icons/fa6";
// import { FaApple } from "react-icons/fa6";


//Google第三方登入

//01 Google一般安裝
//import { GoogleLogin } from "@react-oauth/google";
//import { jwtDecode } from "jwt-decode";

//02 Google客製
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";



const LoginSignup = () => {

	const navigate = useNavigate();
	const [action, setAction] = useState("Sign Up");

	//02客製安裝google
	const login = useGoogleLogin({
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
				console.log(res.data.name);
				navigate("/");
			} catch(err) {
				console.log(err);
			}
		}

	});




	return (
		<div className='log-sign container'>
			<div className='header'>
				<div className='text'>{action}</div>
				<div className='underline'></div>
			</div>
			<div className='submit-container'>
				<div
					className={`submit ${action === "Log In" && "gray"}`}
					onClick={() => {
						setAction("Sign Up");
					}}
				>
					Sign Up
				</div>
				<div
					className={`submit ${action === "Sign Up" && "gray"}`}
					onClick={() => {
						setAction("Log In");
					}}
				>
					Log In
				</div>
			</div>
			<div className='inputs'>
				<IconContext.Provider
					value={{
						style: { margin: "0 10px" },
					}}
				>
					{action === "Log In" ? (
						<div></div>
					) : (
						<div className='input'>
							<FaUserCircle />
							<input type='text' placeholder='Name' />
						</div>
					)}
					<div className='input'>
						<MdOutlineEmail />
						<input type='email' placeholder='Email Id' />
					</div>
					<div className='input'>
						<RiLockPasswordLine />
						<input type='password' placeholder='Password' />
					</div>
				</IconContext.Provider>
			</div>

			{action === "Sign Up" ? (
				<div></div>
			) : (
				<div className='forgot-password'>
					Lost Password? <span>Click Here</span>
					<div className='quick-login'>
						<div className='login-with'>or log in with</div>
						<div className='google-login'>
							<button onClick={() => login()}>
								Log in with
								<FcGoogle style={{ marginLeft: "15px" }} />
							</button>
							{/* <button>
								Log in with
								<FaLine style={{ marginLeft: "15px" }} color='#00CB42' />
							</button>
							<button>
								Log in with
								<FaApple style={{ marginLeft: "15px" }} color='#fff' />
							</button> */}
						</div>
					</div>
				</div>
			)}

			
			
		</div>
	); 
}

export default LoginSignup;
