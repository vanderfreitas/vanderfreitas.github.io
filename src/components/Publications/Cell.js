import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <time className="published">{data.year}</time>
        <h3><a href={data.doi}>{data.title}</a></h3>
      </header>
      <section className="post-data">
        <a href={data.doi} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
        <div className="description">
          <p>{data.authors}</p>
          <p>{data.journal}</p>
        </div>
      </section>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doi: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
