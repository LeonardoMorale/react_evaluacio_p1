import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './App.css';

const Login = () => {
  const onSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Login Exitoso:', decoded);
    alert(`Bienvenido, ${decoded.name}!`);
  };

  const onError = () => {
    console.log('Login Fallido');
    alert('No se pudo iniciar sesión. Por favor, intenta de nuevo.');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bienvenido</h2>
        <p className="login-subtitle">Inicia sesión para continuar</p>
        
        <div className="google-btn-wrapper">
          <GoogleLogin
            onSuccess={onSuccess}
            onError={onError}
            useOneTap
            shape="pill"
            theme="filled_blue"
            text="signin_with"
            width="250"
          />
        </div>

        <div className="login-footer">
          <p>¿No tienes una cuenta? Regístrate</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
