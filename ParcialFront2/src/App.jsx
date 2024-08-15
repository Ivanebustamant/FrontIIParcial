import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css'


export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    // Validaciones
    if (userName.trim().length < 3 && password.length < 6) {
      setError("El número de caracteres para ambos campos es incorrecto");
    } else if (userName.trim().length < 3) {
      setError("El número de caracteres para el nombre de usuario debe ser mayor a 3");
    } else if (password.length < 6) {
      setError("El número de caracteres para la contraseña debe ser mayor a 6");
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      <h3>Bienvenido a Test</h3>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={onSubmitForm}>
        <label>Nombre de usuario: </label>
        <input
          type="text"
          value={userName}
          onChange={onChangeUserName}
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {submitted && <Card userName={userName} password={password} />}
    </div>
  );
}
