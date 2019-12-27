import React from 'react';
import styles from './css/about.css';

const About = (props) => {
  const Education = [{
    school: 'University of Washington',
    degree: 'Masters of Science',
    field: 'Chemistry',
    focus: 'Organic Chemistry',
    start: 'September, 2017',
    end: 'June, 2019',
    thesis: 'Hydroalkylation of alkynes via dual copper-nickel catalysis',
    thesisLink: 'http://hdl.handle.net/1773/44113',
  },
  {
    school: 'University of Southern California',
    degree: 'Bachelors of Science',
    field: 'Chemistry',
    focus: 'Chemical Biology',
    start: 'August, 2013',
    end: 'June, 2019',
  },
  {
    school: 'Homestead High School',
    degree: 'High School Diploma',
    start: 'August 2009',
    end: 'June, 2013',
  },
  ];
  const Tech = [{
    category: 'Front End',
    list: 'Javascript, ES6, React, HTML5, CSS, Redux, Styled-Components, CSS Modules, Webpack, Babel',
  },
  {
    category: 'Back End',
    list: 'Node.js, Express, Sequelize, Mongoose',
  },
  {
    category: 'Databases',
    list: ' Apache Cassandra, MySQL, MongoDB, PostgreSQL',
  },
  {
    category: 'Testing',
    list: 'Jest, Enzyme, Mocha, Chai',
  },
  {
    category: 'Deployment',
    list: 'Docker, AWS EC2/S3/CloudFront, Grunt',
  }];
  return (
    <div className={styles.about}>
      <div>
        <img className={styles.bio_image} alt="bio-portrait" src="./Jason-Chen.jpg" />
        <div>
          <a href="/Resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
      <div>
        <div className={styles.about_categories}>
          <div>
          Biography:
          </div>
        </div>
        <div className={styles.about_categories}>
          <div>Background:</div>

        </div>
        <div className={styles.about_categories}>
          <div>Education:</div>
          <div className={styles.about_category_inner}>
            {Education.map((ed) => (
              <div className={styles.about_degrees}>
                <div className={styles.about_school}>
                  {ed.school}
                  <span>
                    {`${ed.start} - ${ed.end}`}
                  </span>
                </div>
                <div>
                  {ed.degree}
                </div>
                {ed.field ? (
                  <div>
                    <div>
                   Field:
                      {ed.field}
                    </div>
                    <div>
Emphasis:
                      {ed.focus}
                    </div>
                    {ed.thesis ? (
                      <div>
                        <div>
Thesis:
                          {ed.thesis}
                        </div>
                        <div>
Online:
                          <a target="_blank" href={ed.thesisLink}>Thesis URL</a>
                        </div>
                        PDF:
                        <a target="_blank" href="./Mastersthesis.pdf">Thesis PDF</a>
                      </div>
                    ) : ''}
                  </div>
                ) : ''}

              </div>
            ))}
          </div>
        </div>
        <div className={styles.about_categories}>
          <div>
          Experience:
          </div>
        </div>
        <div className={styles.about_categories}>
          <div>Technologies:</div>
          <div className={styles.about_category_inner}>
            {Tech.map((eachTech) => (
              <div className={styles.about_tech}>
                <div>
                  {eachTech.category}
:
                </div>
                <div>{eachTech.list}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
