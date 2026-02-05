import React from 'react';
import './App.css';

import miFotoLocal from './FOTO_REACT.jpeg';

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
            href="/documentacion.html" 
            className="link-text"
          >
            DOCUMENTACION PARCIAL 1
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;