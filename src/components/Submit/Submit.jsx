import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Submit(){
    
const history = useHistory();

const handleSubmitSubmit = (event) => {
    event.preventDefault();

    history.push('/')
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
                    Thank you for your feedback!
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
        <form onSubmit={handleSubmitSubmit}>
        <Stack spacing={2} direction="row">
            <Button type="submit" m="auto" color="secondary" variant="contained">Leave new feedback</Button>
        </Stack>
        </form>
        </Box>
        </>
        )
}

export default Submit;