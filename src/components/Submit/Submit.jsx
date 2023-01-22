import { useHistory } from 'react-router-dom';
import React from 'react';

function Submit(){
    
const history = useHistory();

const handleSubmitSubmit = (event) => {
    event.preventDefault();

    history.push('/')
}

    return(
        <>
        <h1>Thank You for your feedback!</h1>
        <form onSubmit={handleSubmitSubmit}>
            <button type="submit" >
                Leave New Feedback
            </button>
        </form>
        </>
        )
}

export default Submit;