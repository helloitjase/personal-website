import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/home.css';

const Home = (props) => (
  <div>
    <div className={styles.title}>Welcome to my website</div>
    <div>To learn more, click below:</div>
    <Link to="/about">About Me</Link>
    <Link to="/projects">My Projects</Link>
    <Link to="/contact">Contact Me</Link>
  </div>
);

export default Home;
