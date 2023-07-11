import { Login } from "./Login";
import { Caixa } from "./Caixa"
export function Home() {
  return (
    <>
      <Login />
      <div className="home margin base">
        <div className="dash">
          <Caixa nome='user' title='Alunos' />
          <Caixa nome='user' title='Alunos' />
          <Caixa nome='user' title='Alunos' />
          <Caixa nome='user' title='Alunos' />
          <Caixa nome='user' title='Alunos' />
        </div>
      </div>
    </>
  );
}
