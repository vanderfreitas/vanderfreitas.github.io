import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import Pdfcv from '../data/resume/CV_Vander_Freitas.pdf';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Vander Freitas' Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
          <h4><a href={ Pdfcv }>
        Printable CV</a></h4><br></br>
            <h4><a href="http://lattes.cnpq.br/5339877279308939">
        Link to the Brazilian Lattes CV</a></h4>
        </div>
        <hr></hr>
        <div className="link-container">
          {sections.map((sec) => (
            <h4 key={sec}>
              <a href={`#${sec.toLowerCase()}`}>{sec}</a>
            </h4>))}
        </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
    </article>
  </Main>
);

export default Resume;
