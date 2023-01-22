import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
        <Box 
            m="auto"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{
            width: 400,
            height: 200,
            backgroundColor: 'primary.dark'
        }}>
        <Typography 
        variant="h3" 
        gutterBottom
        align='center'
        >
            How are you feeling today?
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
            <form onSubmit={handleFeelingSubmit}>
                <input
                    type="number"
                    min="1"
                    max="5"
                    id="number-box"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                    required />
                    <Stack spacing={2} direction="row">
                    <Button type="submit" m="auto" color="secondary" variant="contained">Next</Button>
                    </Stack>
            </form>
        </Box>
        </>
    )
}


export default Feeling;