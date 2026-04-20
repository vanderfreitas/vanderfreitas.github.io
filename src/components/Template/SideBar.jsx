import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="profile" />
      </Link>
      <header>
        <h2>Vander L. S. Freitas</h2>
        <p>
          <a href="mailto:vander.freitas@ufop.edu.br">
            vander.freitas@ufop.edu.br
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Main interests:</h2>
      <p>
        Complex systems, Network science, Machine Learning, AI with graphs
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Vander L. S. Freitas
      </p>
    </section>
  </section>
);

export default SideBar;
