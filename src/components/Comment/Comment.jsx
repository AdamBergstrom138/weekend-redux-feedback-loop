import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Comment (){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING', 
            payload: feeling
        })
        history.push('/review')
    }

    return(
        <>
        <h1>Comment</h1>
        <form onSubmit={handleCommentSubmit}>
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Comment