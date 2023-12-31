import { useState } from "react";

export function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const acao = (e) => {
    e.preventDefault();
    if (login == "admin" && senha == "admin") {
      $('.login form').css('animation','some 1s ease')
      setTimeout(()=>{
        $('.login').hide()
      }, 800)
    }
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
