import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* My Component */
import Sidebar from './Sidebar.jsx';

/* My Pages */
import Home from './Home.jsx';
import Counter from './Counter.jsx';
import GithubLookup from './GithubLookup.jsx';

/* My Styles */
const AppStyle = {
  display: 'flex'
};

const ContentStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '80vw'
};

/* My App */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={AppStyle}>
          <Sidebar>
            <Link to="/"><p>Home</p></Link>
            <Link to="/counter"><p>Counter</p></Link>
            <Link to="/lookup"><p>Github Lookup</p></Link>
          </Sidebar>
          <div style={ContentStyle}>
            <Route exact={true} path="/" render={() => (
              <Home />
            )}/>
            <Route path="/counter" component={Counter} />
            <Route path="/lookup" component={GithubLookup} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;