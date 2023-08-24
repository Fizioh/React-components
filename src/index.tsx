import React from 'react';
import ReactDOM from 'react-dom';
import { Components } from './components'; // Import the exported Components

ReactDOM.render(
  <React.StrictMode>
    {/* Access JSX versions */}
    <Components.jsx.BoxComponent />

    {/* Access TSX versions */}
    <Components.tsx.BoxComponent />

  </React.StrictMode>,
  document.getElementById('root')
);
