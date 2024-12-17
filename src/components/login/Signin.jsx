import React, {useState} from 'react';
import { signIn } from 'src/config/firebase';

const Login = () => {

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
            {error 
                ? <div>{error}</div>
                : null
            }
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="email"
                    value={email}
                    placeholder='Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    placeholder='Your Password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Login