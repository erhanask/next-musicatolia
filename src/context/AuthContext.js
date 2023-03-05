import React, {useEffect} from 'react';

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        const auth_key = localStorage.getItem('auth_key');
        if (atob(auth_key) === process.env.adminEmail+process.env.adminPassword ) {
            setUser({
                'email': process.env.adminEmail,
                'password': process.env.adminPassword
            });
        }
    },[])

    return (
        <AuthContext.Provider value={{ user,setUser }}>
            {children}
        </AuthContext.Provider>
    );
};