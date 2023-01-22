import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Support (){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupportSubmit = (event) => {
        event.preventDefault();

        // dispatch({
        //     type: 'SET_FEELING', 
        //     payload: feeling
        // })
        history.push('/comment')
    }

    return(
        <>
        <h1>Support</h1>
        <form onSubmit={handleSupportSubmit}>
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Support