import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './css/about.css';
import WhoAmI from './about/whoami.jsx';
import Background from './about/background.jsx';
import Education from './about/education.jsx';
import Tech from './about/tech.jsx';
import Experience from './about/experience.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: false,
      bkg: false,
      edu: false,
      exp: false,
      tech: false,
    };
    this.slideDown = this.slideDown.bind(this);
  }

  slideDown(event) {
    // e.preventDefault();
    const tag = event.target.id;
    const prev = !this.state[tag];

    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
  }


  render() {
    const {
      who, bkg, edu, exp, tech,
    } = this.state;
    console.log(tech);
    return (
      <div className={styles.about}>
        <div>
          <img className={styles.bio_image} alt="bio-portrait" src="./Jason-Chen.jpg" />
          <div>
            <a href="/Resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
        {/* <div>
          <div onClick={this.slideDown} className={styles.about_categories}>

            <CSSTransitionGroup transitionName="who">
              <WhoAmI id="who" />
            </CSSTransitionGroup>
          </div>
          <div onClick={this.slideDown} className={styles.about_categories}>
            <CSSTransitionGroup transitionName="bkg">
              <Background id="bkg" />
            </CSSTransitionGroup>
          </div>
          <div onClick={this.slideDown} className={styles.about_categories}>
            <CSSTransitionGroup transitionName="edu">
              { edu ? <Education id="edu" /> : null}
            </CSSTransitionGroup>
          </div>
          <div onClick={this.slideDown} className={styles.about_categories}>
            <CSSTransitionGroup transitionName="exp">
              <Experience id="exp" />
            </CSSTransitionGroup>
          </div> */}
        <div className={styles.about_categories}>
          <div>hi</div>
          <button id="tech" onClick={this.slideDown} type="button">Technologies:</button>
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {tech ? <div className={styles.panel}>hi</div> : null}
          </CSSTransitionGroup>
        </div>
      </div>
    // </div>
    );
  }
}
export default About;
