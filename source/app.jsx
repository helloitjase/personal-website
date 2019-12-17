import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = (props) => {
  console.log(props);
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
      <Switch>
        <Route path="/contact" component={} />
        <Route path="/about" component={} />
        <Route path="/projects" component={} />
        <Route path="/" component={} />
      </Switch>
    </Router>
  );
};


export default App;
