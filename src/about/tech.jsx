import React from 'react';
import styles from '../css/aboutCategories.css';

const Tech = (props) => {
  console.log(props);

  return (
    <div className={styles.category_outer}>
      <div>Technologies:</div>
      <div className={styles.category_inner}>
        {Techs.map((eachTech) => (
          <div className={styles.tech_about}>
            <div>
              {eachTech.category}
:
            </div>
            <div>{eachTech.list}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Tech;


const Techs = [{
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
