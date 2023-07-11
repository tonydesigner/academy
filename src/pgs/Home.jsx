import { Login } from "./Login";
import { Box } from './componets/Box'
export function Home() {
  return (
    <>
      <Login />
      <div className="home base">
        <div className="dash">
          <Box name='user' title='Alunos' />
        </div>
      </div>
    </>
  );
}
