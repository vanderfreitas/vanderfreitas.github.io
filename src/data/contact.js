import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons/faResearchgate';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
// import { aiGoogleScholar } from '@fortawesome/free-brands-svg-icons/aiGoogleScholar';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/vanderfreitas',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.com/citations?user=XX3euXkAAAAJ&hl',
    label: 'Google Scholar',
    icon: faGraduationCap,
  },
  {
    link: 'https://orcid.org/0000-0001-7989-0816',
    label: 'ORCID',
    icon: faOrcid,
  },
  {
    link: 'https://twitter.com/VanderFreitas8',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://www.researchgate.net/profile/Vander-Freitas',
    label: 'Researchgate',
    icon: faResearchgate,
  },
  {
    link: 'https://www.linkedin.com/in/vander-freitas-61283441/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:vander.freitas@ufop.edu.br',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
