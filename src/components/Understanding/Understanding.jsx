import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <Box 
            m="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
            width: 400,
            height: 200,
            backgroundColor: 'primary.dark'
            }}>
            <Typography 
                variant="h3" 
                gutterBottom
                align='center'>
                    How well are you understanding the content?
            </Typography>
            </Box>
            <Box 
                m="auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                width: 400,
                height: 75,
                backgroundColor: 'primary.dark'
            }}>
                <form onSubmit={handleUnderstandingSubmit}>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            id="number-box"
                            value={understanding}
                            onChange={(event) => setUnderstanding(event.target.value)}
                            required />
                    <Stack spacing={2} direction="row">
                    <Button m="auto" color="secondary" variant="contained" onClick={() => {history.push('/')}}>Back</Button>
                    <Button type="submit" m="auto" color="secondary" variant="contained">Next</Button>
                    </Stack>
                </form>
            </Box>
        </>
    )
}

export default Understanding