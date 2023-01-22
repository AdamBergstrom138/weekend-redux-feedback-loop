import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
                    How well are you being supported?
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
        <form onSubmit={handleSupportSubmit}>
        <input
            type="number"
            min="1"
            max="5"
            id="number-box"
            value={support}
            onChange={(event) => setSupport(event.target.value)}
            required />
        <Stack spacing={2} direction="row">
            <Button m="auto" color="secondary" variant="contained" onClick={() => {history.push('/understanding')}}>Back</Button>
            <Button type="submit" m="auto" color="secondary" variant="contained">Next</Button>
        </Stack>
        </form>
        </Box>
        </>
    )
}

export default Support