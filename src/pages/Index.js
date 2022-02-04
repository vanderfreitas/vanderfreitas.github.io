import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description={"Vander Freitas' personal website. Professor at the Federal University of Ouro Preto, Brazil "}
  >
    <article className="post" id="index">
      <h2 data-testid="heading"><Link to="/">Bio</Link></h2>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Index;
