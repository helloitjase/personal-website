import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Projects from './projects.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Home from './home.jsx';
import styles from './css/app.css';

const App = (props) => (
  <div>
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
      <footer className={styles.app_bottom}>
        <div className={styles.app_bottom_main}>
          <div className={styles.app_bottom_left}>
            <Link className={styles.app_bottom_links} to="/about">About Me</Link>
            <Link className={styles.app_bottom_links} to="/projects">My Projects</Link>
            <Link className={styles.app_bottom_links} to="/contact">Contact Me</Link>
          </div>
          <div className={styles.app_bottom_right}>
            <div className={styles.app_bottom_contact_info}>
              <div className={styles.app_contact_line_info}>Other Forms of Contact:</div>
              <div className={styles.app_contact_line_info}>Phone: (650)-823-3712</div>
              <div className={styles.app_contact_line_info}>Email: jason.sl.chen@gmail.com</div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  </div>
);


export default App;
