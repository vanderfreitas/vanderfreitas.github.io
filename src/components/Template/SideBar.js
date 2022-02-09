import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vander L. S. Freitas</h2>
        <p><a href="mailto:vander.freitas@ufop.edu.br">vander.freitas@ufop.edu.br</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Main interests:</h2> Complex systems, Network science, Data science, Synchronization
    </section>


    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Vander L. S. Freitas - Adapted from <Link to="https://github.com/mldangelo/personal-site">https://github.com/mldangelo/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
