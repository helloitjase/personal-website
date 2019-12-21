import React from 'react';
import styles from './css/about.css';

const About = (props) => (
  <div>
    <div>About Me</div>
    <div styles={{
      width: '50rem', border: '1px solid black', opaque: '1', position: 'absolute',
    }}
    >
      <div styles={{ width: '(0.75 * 50)rem', backgroundColor: '#000000' }} />
    </div>

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
