import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Support (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState('');


    const handleSupportSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORT', 
            payload: support
        })
        history.push('/comment')
    }

    return(
        <>
        <h1>Support</h1>
        <form onSubmit={handleSupportSubmit}>
        <input
                    type="number"
                    min="1"
                    max="5"
                    id="number-box"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                    required />
            <button type="submit" >
                Next
            </button>
            <button onClick={() => {history.push('/understanding')}}>
                Back
            </button>
        </form>
        </>
    )
}

export default Support