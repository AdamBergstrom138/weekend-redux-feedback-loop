import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState('');

    const handleFeelingSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING', 
            payload: feeling
        })
        history.push('/understanding')
}

    return(
        <>
        <h1>How are you feeling today?</h1>
            <form onSubmit={handleFeelingSubmit}>
                <input
                    type="number"
                    min="1"
                    max="5"
                    id="number-box"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                    required />
                        <button type="submit" >
                            Next
                        </button>
            </form>
        </>
    )
}


export default Feeling;