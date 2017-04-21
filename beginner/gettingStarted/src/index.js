import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Different Projects from same tutorial
import CounterApp from './CounterApp';
import GithubApp from './GithubApp';

ReactDOM.render(
// Enter project to Render here  
  <GithubApp />,
  document.getElementById('root')
);
