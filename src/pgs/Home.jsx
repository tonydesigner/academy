import { Login } from "./Login";
import { Box } from './components/Box'
export function Home() {
  return (
    <>
      <Login />
      <div className="home base">
        <div className="dash">
          <Box />
        </div>
      </div>
    </>
  );
}
