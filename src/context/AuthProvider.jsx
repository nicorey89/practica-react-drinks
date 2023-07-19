import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import { userRegister, userLogin } from "../services/user.service";

const AuthContext = createContext();

function AuthProvider ({ children }) {
    const navigate = useNavigate()
    const [ currentUser, setCurrentUser ] = useState(null);
    const storedToken = localStorage.getItem("_token");

    useEffect(() => {
        if(storedToken){
            const decodedToken = storedToken ? jwt_decode(storedToken) : null;
            const { user } = decodedToken ? decodedToken : null;

            setCurrentUser(user);

            return navigate("/");
        }

    }, [])
    function register (data) {
        userRegister(data)
        .then((res) => {
            if(res.ok){
                alert(res.message)
                setTimeout(() => {
                    navigate("/login")
                }, 1000)
                return;
            }else{
                return Promise.reject(res)
            }
        })
        .catch(error => alert(JSON.stringify(error)))
    }
    function login (data) {
        userLogin(data)
        .then((res) => {
            if(res.ok){
                window.localStorage.setItem("_token", res.token);
                const decodedToken = res.token ? jwt_decode(res.token) : null;
                const { user } = decodedToken ? decodedToken : null;

                setCurrentUser(user);

                return navigate("/");
            }else{
                return Promise.reject(res)
            }
        })
        .catch(error => alert(JSON.stringify(error)))

    }
    function logout () {
        setCurrentUser(null)
        localStorage.removeItem("_token")
        navigate("/login")
    }
    const value = {
        currentUser,
        login,
        register,
        logout,

    }
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}
export { AuthContext, AuthProvider }