import { useEffect } from "react";
import authStore from "../stores/authStore";
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const store = authStore();
    const { loggedIn, checkAuth } = store;

    useEffect(() => {
        if (loggedIn === null) {
            checkAuth();
        }
    }, [])

    if (loggedIn === false) {
        return <Navigate to={"/login"} />
    }

    return (
        <>
            {children}
        </>
    )

}

export default RequireAuth