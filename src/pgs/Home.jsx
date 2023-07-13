import { Login } from "./Login";
import { Caixa } from "./Caixa"
export function Home() {
  const items =
  [
    { icon: 'user', title: 'Alunos' },
    { icon: 'user', title: 'Alunos' },
    { icon: 'user', title: 'Alunos' },
    { icon: 'user', title: 'Alunos' },
    { icon: 'user', title: 'Alunos' },
    { icon: 'user', title: 'Alunos' },
  ]
  return (
    <>
      <Login />
      <div className="home base">
        <div className="dash base margin ">
          {
            items.map(i =><Caixa nome={i.icon} title={i.title} />)
          }
        </div>
      </div>
    </>
  );
}
