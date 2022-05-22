import React from 'react';
import notFound from '../../photos/NotFound/404.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className="w-75" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;