import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const MyAppionments = () => {
    const contextValue = useContext(authContext)
    console.log(contextValue)
    return (
        <div>
            <h1>My Appoinments...</h1>
        </div>
    );
};

export default MyAppionments;