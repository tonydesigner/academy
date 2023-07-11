import { Login } from "./Login";
import { Caixa } from "./Caixa"
export function Home() {
  return (
    <>
      <Login />
      <div className="home">
        <div className="dash base margin ">
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
