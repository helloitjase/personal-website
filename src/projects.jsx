import React from 'react';
import styles from './css/projects.css';

const Projects = (props) => (
  <div>
    <div className={styles.projects_main}>
      <div>
        <a className={styles.projects_links} target="https://github.com/UrbanEats/Reservations" href="https://github.com/UrbanEats/Reservations">UrbanEats</a>
      </div>
      <div>
        Service: Reservations
      </div>
      <div>
        Description:
      </div>
    </div>
    <div className={styles.projects_main}>
      <div>
        <a className={styles.projects_links} target="https://github.com/TJM-Associates/ot-main-gallery" href="https://github.com/TJM-Associates/ot-main-gallery">TJM Associates</a>
      </div>
      <div>
        Service: Photo Gallery
      </div>
      <div>
        Description:
      </div>
    </div>
    <div className={styles.projects_main}>
      <div>
        <iframe className={styles.projects_rateThisFood} title="RateThisFood Video" width="1166" height="729" src="https://www.youtube.com/embed/h58cI1eNcm0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div>
        <a className={styles.projects_links} target="https://github.com/helloitjase/RateThisFood" href="https://github.com/helloitjase/RateThisFood">RateThisFood</a>
      </div>
      <div>
        Description:
      </div>
    </div>
  </div>
);

export default Projects;
