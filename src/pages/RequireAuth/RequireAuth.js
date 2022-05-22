import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase_init';
import './RequireAuth.css'

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <h2><div className="lds-circle"><div></div></div></h2>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children
};

export default RequireAuth;