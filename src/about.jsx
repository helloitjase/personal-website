import React from 'react';
import e from 'express';
import styles from './css/about.css';

const About = (props) => {
  const Education = [{
    degree: 'Masters of Science',
    field: 'Chemistry',
    focus: 'Organic Chemistry',
    start: 'September, 2017',
    end: 'June, 2019',
    thesis: 'Hydroalkylation of alkynes via dual copper-nickel catalysis',
    thesisLink: 'http://hdl.handle.net/1773/44113',
  },
  {
    degree: 'Bachelors of Science',
    field: 'Chemistry',
    focus: 'Chemical Biology',
    start: 'August, 2013',
    end: 'June, 2019',
  },
  {
    degree: 'High School Diploma',
    start: 'August 2009',
    end: 'June, 2013',
  },
  ];
  return (
    <div className={styles.about}>
      <div>
        <img className={styles.bio_image} alt="bio-portrait" src="./Jason-Chen.jpg" />
      </div>
      <div>
        <div>
          <div>
          Biography:
          </div>
        </div>
        <div>Background:</div>
        <div>
          <div>Education:</div>
          <div>
            {/* {Education.map((ed) => (
              <div>
                <div>
Degree:
                  {ed.degree}
                </div>
                {ed.field ? (
                  <div>
                    <div>
                   Field:
                      {ed.field}
                    </div>
                    <div>
Focus:
                      {ed.focus}
                    </div>
                    {ed.thesis ? (
                      <div>
                        <div>
Thesis:
                          {ed.thesis}
                        </div>
                        <div>{ed.thesisLink}</div>
                        <a href="./Mastersthesis.pdf">Thesis</a>
                      </div>
                    ) : ''}
                  </div>
                ) : ''}
                <div>
Start:
                  {ed.start}
                </div>
                <div>
End:
                  {ed.end}
                </div>
              </div>
            ))} */}
          </div>
        </div>
        <div>Experience: </div>
        <div>Technologies: </div>
      </div>
    </div>
  );
};
export default About;
