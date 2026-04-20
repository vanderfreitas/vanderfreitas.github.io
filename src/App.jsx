// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Index from './pages/Index';
// import './static/css/main.scss';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Index />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import './static/css/main.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

//const Index = lazy(() => import('./pages/Index'));
import Index from './pages/Index';
//const NotFound = lazy(() => import('./pages/NotFound'));
import NotFound from './pages/NotFound';
//const Resume = lazy(() => import('./pages/Resume'));
import Resume from './pages/Resume';
//const Publications = lazy(() => import('./pages/Publications'));
import Publications from './pages/Publications';
//const Resources = lazy(() => import('./pages/Resources'));
import Resources from './pages/Resources';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;