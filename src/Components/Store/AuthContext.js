import React,{useState, useEffect} from 'react'

const AuthContext =React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () =>{} 
});

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
    const[token,setToken] = useState(initialToken);
    const userIsLoggedIn =!!token;

    const loginHandler = (token) =>{
        console.log(token);
        setToken(token);
        localStorage.setItem('token',token);
    };

     // Set a timeout to clear the token after 5 minutes
    //  setTimeout(() => {
    //     logout();
    //     alert('Token has expired. Please log in again.');
    //   }, 5000);
    useEffect(() => {
        const logoutTimer = setTimeout(() => {
          logoutHandler();
          alert('Token has expired. Please log in again.');
        }, 5*60*1000);
    
        // Clean up the timer when the component unmounts or when the token changes
        return () => clearTimeout(logoutTimer);
      }, [token]);


    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

    };

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    );
};

export default AuthContext;