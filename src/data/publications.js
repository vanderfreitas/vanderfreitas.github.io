// TODO Add a couple lines about each publication
const data = [
  {
    authors: 'P. V. R. Silva, A. A. S. Jorge, L. B. L. Santos, V. L. S. Freitas',
    title: 'ShpStreetGraph: From spatial relations of streets to graph representations',
    journal: 'Software Impacts',
    year: '2024',
    doi: 'https://doi.org/10.1016/j.simpa.2024.100711',
    image: '/images/publications/2024_software_impacts.jpg',
  },
  {
    authors: 'A. S. Oliveira, T. C. Cecote, J. P. R. Alvarenga, V. L. S. Freitas, E. J. S. Luz',
    title: 'Toxic Speech Detection in Portuguese: A Comparative Study of Large Language Models',
    journal: 'Proceedings of the 16th International Conference on Computational Processing of Portuguese',
    year: '2024',
    doi: 'https://aclanthology.org/2024.propor-1.11.pdf',
    image: '/images/publications/2024_propor.png',
  },
  {
    authors: 'F. H. O. Duarte, G. J. P. Moreira, E. J. S. Luz, L. B. L. Santos, V. L. S. Freitas',
    title: 'Correlations between epidemiological time series forecasting and influence regions of Brazilian cities',
    journal: 'Proceedings of the XXIV Brazilian Symposium on Geoinformatics (GEOINFO)',
    year: '2023',
    doi: 'http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m16c/2023/12.18.16.49/doc/thisInformationItemHomePage.html',
    image: '/images/publications/2023_geoinfo_duarte.png',
  },
  {
    authors: 'F. H. O. Duarte, G. J. P. Moreira, E. J. S. Luz, L. B. L. Santos, V. L. S. Freitas',
    title: 'Time Series Forecasting of COVID-19 Cases in Brazil with GNN and Mobility Networks',
    journal: 'Proceedings of the XII Brazilian Conference on Intelligent Systems (BRACIS)',
    year: '2023',
    doi: 'https://doi.org/10.1007/978-3-031-45392-2_24',
    image: '/images/publications/2023_BRACIS.png',
  },
  {
    authors: 'A. S. Oliveira, T. C. Cecote, P. H. L. Silva, J. C. Gertrudes, V. L. S. Freitas, E. J. S. Luz',
    title: 'How Good Is ChatGPT For Detecting Hate Speech In Portuguese?',
    journal: 'Proceedings of the XIV Symposium in Information and Human Language Technology (STIL)',
    year: '2023',
    doi: 'https://doi.org/10.5753/stil.2023.233943',
    image: '/images/publications/2023_STIL.png',
  },
  {
    authors: 'A. Jorge, V. L. S. Freitas, I. C. Costa, L. B. L. Santos',
    title: 'Graph4GIS: Geographical graphs for GIS platforms based on weather radar dataset',
    journal: 'Software Impacts',
    year: '2023',
    doi: 'https://doi.org/10.1016/j.simpa.2023.100530',
    image: '/images/publications/2023_software_impacts.png',
  },
  {
    authors: 'L. B. L. Santos, T. M. Anazawa, L. N. Ferreira, V. L. S. Freitas',
    title: 'Editorial: Integrating physical and social sciences towards the sustainable development goals',
    journal: 'Frontiers in Physics',
    year: '2023',
    doi: 'https://doi.org/10.3389/fphy.2023.1204201',
    image: '/images/publications/2023_frontiersinphysics_editorial.jpg',
  },
  {
    authors: 'L. B. L. Santos, G. G. Soares, T. Garg, A. A. S. Jorge, L. R. Londe, R. T. Reani, R. B. Bacelar, C. E. S. Oliveira, V. L. S. Freitas, I. M. Sokolov',
    title: 'Vulnerability analysis in complex networks under a flood risk reduction point of view',
    journal: 'Frontiers in Physics',
    year: '2023',
    doi: 'https://doi.org/10.3389/fphy.2023.1064122',
    image: '/images/publications/2023_frontiersinphysics.png',
  },
  {
    authors: 'L. R. Tomás, G. G. Soares, A. A. S. Jorge, J. F. Mendes, V. L. S. Freitas, L. B. L. Santos',
    title: 'Flood risk map from hydrological and mobility data: A case study in São Paulo (Brazil)',
    journal: 'Transactions in GIS',
    year: '2022',
    doi: 'https://doi.org/10.1111/tgis.12962',
    image: '/images/publications/2022_tingis.png',
  },
  {
    authors: 'P, H. Silva, G. J. P. Moreira, V. L. S. Freitas, R. C. P. Silva, D. Menotti, E. J. S. Luz',
    title: 'A Decidability-Based Loss Function',
    journal: 'Proceedings of the 2022 International Joint Conference on Neural Networks (IJCNN)',
    year: '2022',
    doi: 'http://dx.doi.org/10.1109/ijcnn55064.2022.9891934',
    image: '/images/publications/2022_IJCNN.png',
  },
  {
    authors: 'G. A. L. Silva, P. H. Silva, V. L. S. Freitas, G. J. P. Moreira, E. J. S. Luz',
    title: 'Cardiac Arrhythmia Detection in ECG Signals Using Graph Convolutional Network',
    journal: 'Proceedings of the Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS)',
    year: '2022',
    doi: 'https://doi.org/10.5753/sbcas.2022.222434',
    image: '/images/publications/2022_SBCAS_1.png',
  },  
  {
    authors: 'R. F. Oliveira, V. L. S. Freitas, G. J. P. Moreira, E. J. S. Luz',
    title: 'Explorando Redes Neurais de Grafos para Classificação de Arritmias',
    journal: 'Proceedings of the Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS)',
    year: '2022',
    doi: 'https://doi.org/10.5753/sbcas.2022.222510',
    image: '/images/publications/2022_SBCAS_2.png',
  },
  {
    authors: 'V. L. S. Freitas, S. Yanchuk, H. L. C. Grande, E. E. N. Macau',
    title: 'The effects of time-delay and phase lags on symmetric circular formations of mobile agents',
    journal: 'The European Physical Journal - Special Topics',
    year: '2021',
    doi: 'https://doi.org/10.1140/epjs/s11734-021-00153-6',
    image: '/images/publications/2021_epjst.png',
  },
  {
    authors: 'V. L. S. Freitas, S. Yanchuk, M. Zaks, E. E. N. Macau',
    title: 'Synchronization-based symmetric circular formations of mobile agents and the generation of chaotic trajectories',
    journal: 'Communications in Nonlinear Science and Numerical Simulation',
    year: '2021',
    doi: 'https://doi.org/10.1016/j.cnsns.2020.105543',
    image: '/images/publications/2020_cnsns.png',
  },
  {
    authors: 'V. L. S. Freitas, T. C. R. O. Konstantyner, J. F. Mendes, C. S. N. Sepetauskas, L. B. L. Santos',
    title: 'The correspondence between the structure of the terrestrial mobility network and the spreading of COVID-19 in Brazil',
    journal: 'Cadernos de Saúde Pública',
    year: '2020',
    doi: 'http://cadernos.ensp.fiocruz.br/csp/artigo/1186/a-correspondencia-entre-a-estrutura-da-rede-de-mobilidade-terrestre-e-a-propagacao-da-covid-19-no-brasil',
    image: '/images/publications/2020_csp.jpg',
  },
  {
    authors: 'V. L. S. Freitas, G. J. P. Moreira, L. B. L. Santos',
    title: 'Robustness analysis in an inter-cities mobility network: modeling municipal, state and federal initiatives as failures and attacks toward SARS-CoV-2 containment',
    journal: 'PeerJ',
    year: '2020',
    doi: 'https://peerj.com/articles/10287/',
    image: '/images/publications/2020_peerj.png',
  },
  {
    authors: 'V. L. S. Freitas, J. C. Lacerda, E. E. N. Macau',
    title: 'Complex Networks Approach for Dynamical Characterization of Nonlinear Systems',
    journal: 'International Journal of Bifurcation and Chaos',
    year: '2019',
    doi: 'https://doi.org/10.1142/S0218127419501888',
    image: '/images/publications/2019_ijbc.png',
  },
  {
    authors: 'V. L. S. Freitas, F. L. De Sousa, E. E. N. Macau',
    title: 'Reactive model for autonomous vehicles formation following a mobile reference',
    journal: 'Applied Mathematical Modelling',
    year: '2018',
    doi: 'https://doi.org/10.1016/j.apm.2018.04.011',
    image: '/images/publications/2018_amm.png',
  },
  {
    authors: 'V. L. S. Freitas, E. E. N. Macau',
    title: 'Collision Avoidance Mechanism for Symmetric Circular Formations of Unitary Mass Autonomous Vehicles at Constant Speed',
    journal: 'Mathematical Problems in Engineering',
    year: '2018',
    doi: 'https://doi.org/10.1155/2018/6291082',
    image: '/images/publications/2018_mpe.png',
  },
  {
    authors: 'J. Noetel, V. L. S. Freitas, E. E. N. Macau, L. Schimansky-Geier',
    title: 'Search and return model for stochastic path integrators',
    journal: 'Chaos',
    year: '2018',
    doi: 'https://doi.org/10.1063/1.5040108',
    image: '/images/publications/2018_chaos.png',
  },
  {
    authors: 'J. Noetel, V. L. S. Freitas, E. E. N. Macau, L. Schimansky-Geier',
    title: 'Optimal noise in a stochastic model for local search',
    journal: 'Physical Review E',
    year: '2018',
    doi: 'https://doi.org/10.1103/PhysRevE.98.022128',
    image: '/images/publications/2018_pre.png',
  },
  {
    authors: 'V. L. S. Freitas, M. G. Quiles, E. E. N. Macau',
    title: 'Controle baseado em redes neurais artificiais para agentes móveis em formação',
    journal: 'Proceeding Series of the Brazilian Society of Computational and Applied Mathematics',
    year: '2018',
    doi: 'https://doi.org/10.5540/03.2018.006.01.0345',
    image: '/images/publications/2018_cnmac.png',
  },
  {
    authors: 'V. L. S. Freitas, B. M. F. Reis, A. M. G. Tommaselli',
    title: 'Automatic shadow detection in aerial and terrestrial images',
    journal: 'Boletim de Ciencias Geodesicas',
    year: '2017',
    doi: 'https://doi.org/10.1590/S1982-21702017000400038',
    image: '/images/publications/2017_bcg.png',
  },
];

export default data;

