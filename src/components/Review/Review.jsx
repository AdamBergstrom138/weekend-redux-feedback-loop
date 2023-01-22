import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

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
        <h1>Review</h1>
        <p>Feeling: {feelingDispatch}</p>
        <p>Understanding: {understandingDispatch}</p>
        <p>Support: {supportDispatch}</p>
        <p>Comments: {commentDispatch.comment}</p>
        <form onSubmit={handleReviewSubmit}>
            <button type="submit" >
                Submit
            </button>
        </form>
        </>
    )
}

export default Review