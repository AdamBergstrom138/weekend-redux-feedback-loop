import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Understanding (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');

    const handleUnderstandingSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING', 
            payload: understanding
        })
        history.push('/support')
    }

    return(
        <>

        <h1>Understanding</h1>
        <form onSubmit={handleUnderstandingSubmit}>
                <input
                    type="number"
                    min="1"
                    max="5"
                    id="number-box"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                    required />
            <button type="submit" >
                Next
            </button>
        </form>
        </>
    )
}

export default Understanding