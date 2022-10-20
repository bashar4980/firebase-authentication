import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);

    
    return (
        <div className='text-center'>
            <h1 className='text-2xl'>I am {user?.email && <span>{user.email}</span>}</h1>
        </div>
    );
};

export default Home;