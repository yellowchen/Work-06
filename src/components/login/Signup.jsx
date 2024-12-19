import React, {useState} from 'react';
import { signUp } from 'src/config/firebase';

//icon
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const Signup = () => {
	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
		setName("");
        setEmail("");
		setPassword("");
		const res = await signUp(email, password);
		if (res.error) setError(res.error);
    };

    return (
		<>
			{error ? <div>{error}</div> : null}
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