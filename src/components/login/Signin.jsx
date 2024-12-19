import React, {useState} from 'react';
import { signIn } from 'src/config/firebase';

//icon
import { IconContext } from "react-icons";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        const res = await signIn(email, password);
        if(res.error) setError(res.error);
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
						<MdOutlineEmail />
						<input
							type='text'
							name='email'
							value={email}
							placeholder='Your Email'
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
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
					</div>
					<div className='member-submit'>
						<button type='submit' onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</IconContext.Provider>
			</form>
		</>
	);
}

export default Signin