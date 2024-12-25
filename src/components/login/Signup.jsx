import React, {useState} from 'react';
import { auth } from "src/config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

//icon
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



const Signup = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			console.log(userCredential);
			const user = userCredential.user;

			const updateName = await updateProfile(auth.currentUser, {
				displayName: name
			});
			console.log(updateName);
				
			localStorage.setItem("token", user.accessToken);
			localStorage.setItem("user", JSON.stringify(user));
			
			navigate("/");
		}catch(err) {
			console.log(err);
		}
    };

    return (
		<>
			<form onSubmit={handleSubmit}>
				<IconContext.Provider
					value={{
						style: { margin: "0 10px" },
					}}
				>
					<div className='input'>
						<FaUserCircle />
						<input
							type='text'
							name='name'
							value={name}
							placeholder='Your Name'
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='input'>
						<MdOutlineEmail />
						<input
							type='text'
							name='email'
							value={email}
							placeholder='Your Email'
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='input'>
						<RiLockPasswordLine />
						<input
							type='password'
							name='password'
							value={password}
							placeholder='Your Password'
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='member-submit'>
						<button type='submit' onClick={handleSubmit}>Submit</button>
					</div>
				</IconContext.Provider>
			</form>
		</>
	);
};

export default Signup