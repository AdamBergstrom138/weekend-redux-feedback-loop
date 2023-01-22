import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



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
                    Any comments you want to leave?
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
        <form onSubmit={handleCommentSubmit}>
            <input
                type="text"
                placeholder="Comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                />
        <Stack spacing={2} direction="row">
            <Button m="auto" color="secondary" variant="contained" onClick={() => {history.push('/support')}}>Back</Button>
            <Button type="submit" m="auto" color="secondary" variant="contained">Next</Button>
        </Stack>
        </form>
        </Box>
        </>
    )
}

export default Comment