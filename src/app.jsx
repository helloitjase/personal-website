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
      <header className={styles.app_top}>
        <div className={styles.app_title}>Jason Chen</div>
        <div className={styles.app_top_nav}>
          <Link className={styles.app_top_links} to="/">
            <div className={styles.app_top_each_link}>
              About Me
            </div>
          </Link>
          <Link className={styles.app_top_links} to="/projects">
            <div className={styles.app_top_each_link}>
              My Projects
            </div>
          </Link>
          <Link className={styles.app_top_links} to="/contact">
            <div className={styles.app_top_each_link}>
              Contact Me
            </div>
          </Link>
        </div>
      </header>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={About} />
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
              <div className={styles.app_bottom_contact_info_left}>
                <div className={styles.app_bottom_ref}>
                  <a
                    className={styles.app_bottom_github}
                    href="https://github.com/helloitjase"
                  >
Github
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ paddingLeft: '3px', width: '1rem' }}><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                  </a>
                </div>
                <div className={`${styles.app_contact_line_info}${styles.app_contact_phone_outer}`}>
                  <svg
                    style={{
                      color: '#EDF2F4', width: '1rem', paddingRight: '3px', margin: '0', verticalAlign: 'middle',
                    }}
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enableBackground="new 0 0 1000 1000"
                    xmlSpace="preserve"
                  >
                    <g><path fill="currentColor" d="M730.5,990c-63.2,0-144.9-42.1-202.2-77.5c-76.8-47.3-159.5-112.8-233-184.3l-0.3-0.3l-23.3-23.3c-71.5-73.4-137-156.2-184.3-233C52.1,414.3,10,332.7,10,269.5c0-67.7,48.4-139.5,69.2-167.2C95.4,80.6,152.1,10,200.3,10c19.8,0,41.1,13,69.1,42c24.8,25.7,48.5,57.6,64.1,79.9c20.9,29.9,40.3,61.2,54.5,88.1c23,43.6,25.7,62.3,25.7,72.6c0,20.7-10.8,38.7-32.2,53.4c-14.1,9.7-30.9,17-47.3,24.1c-11,4.8-28.6,12.4-35.3,17.7c2.3,9.9,12.6,33.8,40.2,74.4c25.7,37.8,59,78.8,89.1,109.6c30.9,30.1,71.8,63.4,109.6,89.1c40.6,27.6,64.5,37.8,74.4,40.2c5.3-6.7,12.9-24.3,17.7-35.3c7.1-16.3,14.4-33.2,24.1-47.3c14.7-21.3,32.7-32.2,53.4-32.2c10.3,0,29,2.7,72.6,25.7c26.9,14.2,58.2,33.6,88.1,54.5c22.3,15.6,54.2,39.3,79.9,64.1c29,28,42,49.3,42,69.1c0,48.2-70.6,104.9-92.3,121.1C870,941.6,798.2,990,730.5,990L730.5,990z M335.9,686.9c70.4,68.6,149.6,131.3,222.8,176.4c71,43.8,133.6,68.9,171.8,68.9c34,0,82.5-20.8,129.8-55.6c20.7-15.3,39.5-32.3,53.1-47.8c12.7-14.6,17.3-24.2,18.5-28c-4.9-10.5-34-43.4-101.9-90.3c-26.6-18.4-54.2-35.3-77.6-47.6c-29.4-15.4-41.6-18.1-44.4-18.5c-1.1,0.7-4.3,3.4-9.1,11.6c-5.4,9.1-10.7,21.2-15.7,32.9c-6.2,14.4-12.7,29.3-20.6,41.3c-12.8,19.5-28.6,29.4-46.9,29.5c-0.3,0-0.7,0-1,0c-8.9-0.2-35.9-0.8-109.3-50.8c-40.5-27.6-84.5-63.4-117.7-95.8l-0.5-0.5c-32.4-33.2-68.2-77.2-95.8-117.7c-50-73.4-50.6-100.5-50.8-109.3c-0.4-18.6,9.4-34.6,29.1-47.7c12.1-8,27.1-14.5,41.6-20.8c11.7-5.1,23.8-10.3,32.9-15.7c8.1-4.9,10.8-8.1,11.6-9.1c-0.4-2.8-3.1-15-18.5-44.4c-12.3-23.4-29.2-50.9-47.6-77.6c-46.9-67.9-79.8-97-90.3-101.9c-3.9,1.2-13.4,5.8-28,18.5c-15.6,13.5-32.6,32.4-47.8,53.1c-34.8,47.2-55.6,95.7-55.6,129.7c0,38.2,25.1,100.8,68.9,171.8c45.1,73.2,107.8,152.4,176.4,222.8L335.9,686.9L335.9,686.9z" /></g>
                  </svg>
                  <span className={styles.app_contact_phone}>(650)-823-3712</span>
                </div>
              </div>
              <div className={styles.app_bottom_contact_info_right}>
                <div className={styles.app_bottom_ref}>
                  <a
                    className={styles.app_bottom_linkedin}
                    href="https://www.linkedin.com/in/helloitjase/"
                  >
LinkedIn
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin"
                      className="svg-inline--fa fa-linkedin fa-w-14 fa-lg "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        paddingLeft: '3px', top: '2px', position: 'relative', width: '1rem',
                      }}
                    >
                      <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </div>
                <div className={`${styles.app_contact_line_info}${styles.app_contact_phone_outer}`}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1rem', verticalAlign: 'bottom' }}><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
                  <span className={styles.app_contact_email}>jason.sl.chen@gmail.com</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </Router>
  </div>
);


export default App;
