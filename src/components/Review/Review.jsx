import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Review (){

    const dispatch = useDispatch();
    const history = useHistory();

    const feelingDispatch = useSelector(store => store.feelingDispatch);
    const understandingDispatch = useSelector(store => store.understandingDispatch);
    const supportDispatch = useSelector(store => store.supportDispatch);
    const commentDispatch = useSelector(store => store.commentDispatch);

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingDispatch,
                understanding: understandingDispatch,
                support: supportDispatch,
                comments: commentDispatch.comment
          }
          }).then((response) => {
              console.log(response)
          }).catch((err) => {
            console.error('handleSubmit fail:', err)
          })

        history.push('/submit')
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
            height: 75,
            backgroundColor: 'primary.dark'
        }}>
            <Typography 
                variant="h3" 
                gutterBottom
                align='center'>
                    Review
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
        <p>Feeling: {feelingDispatch}</p>
        <p>Understanding: {understandingDispatch}</p>
        <p>Support: {supportDispatch}</p>
        <p>Comments: {commentDispatch.comment}</p>
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
        <form onSubmit={handleReviewSubmit}>
        <Stack spacing={2} direction="row">
            <Button m="auto" color="secondary" variant="contained" onClick={() => {history.push('/comment')}}>Back</Button>
            <Button type="submit" m="auto" color="secondary" variant="contained">Next</Button>
        </Stack>
        </form>
        </Box>
        </>
    )
}

export default Review