import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

let root = null;
// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  root = hydrateRoot(rootElement,<StrictApp />);
} else {
  root = createRoot(rootElement,<StrictApp />);
}
root.render(<App />);
