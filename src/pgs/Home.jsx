import { Login } from "./Login";
import { Caixa } from "./Caixa"
export function Home() {
  const items
  [
    { icon: 'user', link='/alunos', title: 'Alunos' }
  ]
  return (
    <>
      <Login />
      <div className="home">
        <div className="dash base margin ">
          {
            items.map(i =>
             
                <Caixa nome={i.icon} title={i.title} />
              
            )
          }

        </div>
      </div>
    </>
  );
}
