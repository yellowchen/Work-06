import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, provide } from "src/config/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

//icon
import { FcGoogle } from "react-icons/fc";

import Signup from 'src/components/login/Signup';
import Signin from 'src/components/login/Signin';

const Login = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState("Sign Up");

    const login = async () => {
        const res = await signInWithPopup(auth, provide);
        console.log(res);
        navigate("/");
    }
    const logout = () => {
        auth.signOut();
		navigate("/");
    };

	//判斷是否登入
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				localStorage.setItem("loggedIn", true);
				localStorage.setItem("username", auth.currentUser.displayName);
			} else {
				console.log("failed");
			}
		});
	}, []);

    return (
		<div className='container'>

			{/* login & logout */}
			{auth?.currentUser?.displayName ? (
				<div className='log log-out'>
					<div className='header'>
						<div className='text'>Log Out</div>
					</div>
					<div className='submit-container'>
						<div className='submit' onClick={logout}>
							Log Out
						</div>
					</div>
				</div>
			) : (
				<div className='log log-sign'>
					{/* 01 Header */}
					<div className='header'>
						<div className='text'>{action}</div>
						<div className='underline'></div>
					</div>

					{/* 02 signup & login */}
					<div className='submit-container'>
						<div
							className={`submit ${action === "Sign Up" && "chosen"}`}
							onClick={() => {
								setAction("Sign Up");
							}}
						>
							Sign Up
						</div>
						<div
							className={`submit ${action === "Log In" && "chosen"}`}
							onClick={() => {
								setAction("Log In");
							}}
						>
							Log In
						</div>
					</div>

					{/* 03 info */}
					{action === "Sign Up"
						? <Signup />
						: <Signin />
					}

					{/* 04 quick: login + lost password  */}
					{action === "Log In" ? (
						<div className='forgot-password'>
							Lost Password? <span>Click Here</span>
							<div className='quick quick-login'>
								<div className='quick-with'>or</div>
								<div className='member-submit'>
									<button onClick={() => login()}>
										Log In with
										<FcGoogle style={{ marginLeft: "15px" }} />
									</button>
								</div>
							</div>
						</div>
					) : (
						/*04 quick: signup*/
						<div className='quick'>
							<div className='quick-with'>or</div>
							<div className='member-submit'>
								<button onClick={() => login()}>
									Sign Up with
									<FcGoogle style={{ marginLeft: "15px" }} />
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Login