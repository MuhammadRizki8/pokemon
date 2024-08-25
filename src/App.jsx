import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
