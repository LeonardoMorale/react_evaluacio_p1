import React from 'react';
import './App.css';

import miFotoLocal from './yo.jpeg';

function App() {
  return (
    <div className="main-container">
      <div className="content-box">
        
        {}
        <img src={miFotoLocal} alt="Avatar" className="avatar-img" />

        {}
        <h1 className="title">Evaluación parcial 1</h1>
        
        {}
        <h2 className="subtitle">Alumno(a): Leonardo Morales Carrera</h2>

        {}
        <div className="links-container">
          <a 
            href="https://www.linkedin.com/in/leonardo-morales-06685036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&authuser=2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-text"
          >
            LINKED IN DE MI PROFILE
          </a>

          <a 
            href={process.env.PUBLIC_URL + '/documentacion.html'}
            className="link-text"
          >
            DOCUMENTACION PARCIAL 1
          </a>

          <a 
            href={process.env.PUBLIC_URL + '/documentacion_p2.html'}
            className="link-text"
          >
            DOCUMENTACION PARCIAL 2
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;