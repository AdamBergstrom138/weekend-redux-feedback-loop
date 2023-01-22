import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Review (){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        // dispatch({
        //     type: 'SET_FEELING', 
        //     payload: feeling
        // })
        history.push('/')
    }


    return(
        <>
        <h1>Review</h1>
        <form onSubmit={handleReviewSubmit}>
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Review