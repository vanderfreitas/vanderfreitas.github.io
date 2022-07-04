import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

//import Education from '../components/Resume/Education';
//import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';


const Resources = () => (
  <Main
    title="Resources"
    description="Some resources."
  >
    <article className="post" id="resources">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resources">Resources</Link></h2>
          <div className="link-container">
            <h4>{{"Soon..."}}</h4>
          </div>
        </div>
      </header>
    </article>
  </Main>
);

export default Resources;
