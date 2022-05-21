import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            Update
        </div>
    );
};

export default Update;