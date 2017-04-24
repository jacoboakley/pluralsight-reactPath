import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Sidebar from './Sidebar.jsx';

// Different Projects from same tutorial
import Counter from './Counter';
import GithubLookup from './GithubLookup';


class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <GithubLookup />
      </div>
    );
  }
}

ReactDOM.render(
// Enter project to Render here  
  <App />,
  document.getElementById('root')
);
