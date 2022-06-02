import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './Components/ProtectedRoutes';
import Login from './Components/Login/Login';
import Pokedex from './Components/Pokedex/Pokedex';
import './App.css';
import PokemonDetail from './Components/Pokemons/PokemonDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='pokedex/:id'element={<PokemonDetail/>} />
        </Route>  
      </Routes>
      </BrowserRouter>
  );
}

export default App;
