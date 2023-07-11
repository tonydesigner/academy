import { useState } from "react";

export function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const acao = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (login == "admin" && senha == "admin") {
        $('.login form').css('animation', 'acao ease')
        $('.login').hide()
      }
    }, 1000)


  };
  return (
    <>
      <div className="login center">
        <form>
          <input
            type="text"
            placeholder="LogIn"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" onClick={acao}>
            Acesar
          </button>
        </form>
      </div>
    </>
  );
}
