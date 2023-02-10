import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/minigame-untangle/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ display: 'flex', width: '100%', height: '100%', position: "absolute", justifyContent: 'center', alignItems: 'center' }}>
      <App />
    </div>
  </React.StrictMode>,
);
