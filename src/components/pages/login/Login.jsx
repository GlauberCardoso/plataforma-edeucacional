import React from "react";
import Menu from "../../molecules/Menu";


export default function Login() {
  return (
    <>
    <Menu />
    <div id="login-container">
      <form action="" method="">
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          autocomplete="email"
          placeholder="E-mail"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          minlength="8"
          title="Coloque no mínimo 8 caracteres"
          placeholder="Senha"
          autocomplete="on"
        />
        <a href="#" id="esqueceu-pass">
          Esqueceu sua senha?
        </a>
        <input type="submit" value="Login" />
      </form>

      <div id="cadastro-container">
        <p>OU</p>
        <a href="#">Cadastre-se</a>
      </div>
    </div>
    </>
  );
}
