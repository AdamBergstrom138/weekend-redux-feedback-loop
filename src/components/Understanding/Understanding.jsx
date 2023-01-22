import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Understanding (){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstandingSubmit = (event) => {
        event.preventDefault();

        // dispatch({
        //     type: 'SET_FEELING', 
        //     payload: feeling
        // })
        history.push('/support')
    }

    return(
        <>

        <h1>Understanding</h1>
        <form onSubmit={handleUnderstandingSubmit}>
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Understanding