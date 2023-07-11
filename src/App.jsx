import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pgs/Home'
import './App.css'
import { Menu } from './components/Menu'
import { Alunos } from './pgs/Alunos'
import { Financas } from './pgs/Financas'
import { Modalidade } from './pgs/Modalidade'

function App() {

  return (
   <>
	<Router>
		<div className="box center">
		<Menu />
		<Routes>
			<Route path='/academy' element={<Home />}/>
			<Route path='/alunos' element={<Alunos />}/>
			<Route path='/financeiro' element={<Financas />}/>
			<Route path='/modalidade' element={<Modalidade />}/>
		</Routes>

		</div>
		
	</Router>
   </>
  )
}

export default App
