import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Comment (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [comment, setComment] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENT', 
            payload: {
                comment: comment
            }
        })
        history.push('/review')
    }

    return(
        <>
        <h1>Comment</h1>
        <form onSubmit={handleCommentSubmit}>
            <input
                type="text"
                placeholder="Comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                />
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Comment