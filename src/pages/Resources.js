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
            <h3>{"New student joining our group?"}</h3>
            <ul>
              <li>Please refer to the following <a href="https://github.com/ufopcsilab/projects">Guidelines</a></li>
            </ul>
            <h3>{"Network Science"}</h3>
            <h4>{"Books"}</h4>
            <ul>
              <li><a href="http://networksciencebook.com/">Network Science Book by Albert-László Barabasi</a></li>
            </ul>
            <h4>{"Basic Network science Packages"}</h4>
            <ul>
              <li><a href="https://igraph.org/">igraph</a></li>
              <li><a href="https://networkx.org/">NetworkX</a></li>
              <li><a href="https://graph-tool.skewed.de/">Graph-Tool</a></li>
            </ul>
            <h4>{"Multilayer networks"}</h4>
            <ul>
              <li><a href="https://github.com/manlius/muxViz">muxViz</a></li>
              <li><a href="https://github.com/nkoub/multinetx">multiNetX</a></li>
              <li><a href="http://mkivela.com/pymnet/">Pymnet</a></li>
              <li><a href="https://github.com/SkBlaz/py3plex">Py3Plex</a></li>
            </ul>
            <h4>{"Simple initial code"}</h4>
            <ul>
              <li><a href="https://github.com/vanderfreitas/ComplexNetworksStarterPack">Useful starting code</a></li>
              <li><a href="https://github.com/vanderfreitas/useful-network-science-code">Useful code</a></li>
            </ul>
          </div>
        </div>
      </header>
    </article>
  </Main>
);

export default Resources;
