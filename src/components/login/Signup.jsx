import React, {useState} from 'react';
import { signUp } from 'src/config/firebase';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail("");
		setPassword("");
		const res = await signUp(email, password);
		if (res.error) setError(res.error);
    };

    return (
		<>
            <h2>Sign Up</h2>
			<div>
				{error ? <div>{error}</div> : null}
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='email'
						value={email}
						placeholder='Your Email'
                        required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						value={password}
						placeholder='Your Password'
                        required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
};

export default Signup