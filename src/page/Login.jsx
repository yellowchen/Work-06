import React, {useState} from 'react';
// import LoginSignup from 'src/components/login/LoginSignup';
import { useEffect } from 'react';
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { auth, provide, db } from "src/config/firebase";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

//toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

//icon
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";


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
				localStorage.setItem("username", auth.currentUser.displayName)
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
					<div className='inputs'>
						<IconContext.Provider
							value={{
								style: { margin: "0 10px" },
							}}
						>
							{/* 03 info: name  */}
							{action === "Sign Up" ? (
								<div className='input'>
									<FaUserCircle />
									<input type='text' placeholder='Name' />
								</div>
							) : (
								<div></div>
							)}
							<div className='input'>
								<MdOutlineEmail />
								<input type='email' placeholder='Email Id' />
							</div>
							<div className='input'>
								<RiLockPasswordLine />
								<input type='password' placeholder='Password' />
							</div>
							<div className='member-submit'>
								<button>Submit</button>
							</div>
						</IconContext.Provider>
					</div>

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