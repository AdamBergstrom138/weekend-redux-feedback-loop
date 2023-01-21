import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import components
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comment from '../Comment/Comment'
import Review from '../Review/Review'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
    </div>
  );
}

export default App;
