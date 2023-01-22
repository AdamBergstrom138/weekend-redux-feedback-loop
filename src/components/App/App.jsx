import React from 'react';
import axios from 'axios';
import './App.css';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

// import components
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comment from '../Comment/Comment'
import Review from '../Review/Review'
import Submit from '../Submit/Submit'

function App() {

  const history = useHistory();

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>

        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comment">
         <Comment />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/submit">
          <Submit />
        </Route>
      </Router>
  );
}

export default App;
