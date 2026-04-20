import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './App.css';

import miFotoLocal from './yo.jpeg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Login Exitoso:', decoded);
    setIsLoggedIn(true);
  };

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

          {!isLoggedIn ? (
            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={onSuccess}
                onError={() => console.log('Login Fallido')}
                shape="pill"
                theme="filled_blue"
                text="signin_with"
                width="250"
              />
            </div>
          ) : (
            <>
              <a
                href={process.env.PUBLIC_URL + '/ers.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                DESCARGAR DOCUMENTO ERS DEL PROYECTO
              </a>
              <a
                href="https://agoramaquinaria.atlassian.net/jira/software/projects/AG/boards/34"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                TABLERO JIRA PROYECTO AGORA
              </a>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
