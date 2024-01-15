import { createContext } from "react";


export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const authInfo ={name :"kala dola mola"};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default (AuthProviders);

/**
 1. Create context
 */