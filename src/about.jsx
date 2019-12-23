import React from 'react';
import styles from './css/about.css';

const About = (props) => (
  <div>
    <div>
      <img className={styles.bio_image} alt="bio-portrait" src="./Jason-Chen.jpg" />
    </div>
    <div>
Biography:
      <div>Background:</div>
      <div>Education: </div>
      <div>Experience: </div>
      <div>Technologies: </div>
    </div>
  </div>
);

export default About;
