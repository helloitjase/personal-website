import React from 'react';
import styles from '../css/aboutCategories.css';

const Education = (props) => {
  console.log(props);
  return (
    <div className={styles.category_outer}>
      <div>Education:</div>
      <div className={styles.category_inner}>
        {Educations.map((ed) => (
          <div className={styles.edu_degrees}>
            <div className={styles.edu_school}>
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
  );
};

export default Education;


const Educations = [{
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
