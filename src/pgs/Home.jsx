import { Login } from "./Login";
import { Caixa } from "./Caixa"
export function Home() {
  return (
    <>
      <Login />
      <div className="home base">
        <div className="dash">
          <Caixa />
        </div>
      </div>
    </>
  );
}
