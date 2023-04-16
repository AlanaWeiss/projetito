import "./login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function validateForm() {
    return usuario.length > 0 && senha.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('aqui');
  }

  return (
    <div className="login">
      <div className="login-container">
      <h2>Entre na sua conta</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="usuario">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Button block="true" size="lg" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
          Login
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default Login;
