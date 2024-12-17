import React, {useState, useEffect} from 'react'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import AuthContext from 'src/contexts/AuthContext';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, []);
    
    return (
		<>
			<AuthContext.Provider value={{ user }}>
                {children}
            </AuthContext.Provider>
		</>
	);
}

export default AuthProvider;