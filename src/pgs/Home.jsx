import { Login } from "./Login";
import { Caixa } from "./Caixa"
import { Link } from "react-router-dom"
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
              <Link to={i.lik} className='link'>
                <Caixa nome={i.icon} title={i.title} />
              </Link>
            )
          }

        </div>
      </div>
    </>
  );
}
