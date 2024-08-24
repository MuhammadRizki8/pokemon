import { useState } from 'react';
import pokemonJSON from '../../data/pokemon.json';
import PokemonItem from '../PokemonItem/PokemonItem';
import FilterModal from './FilterModal'; // Import komponen modal

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);
  const [showModal, setShowModal] = useState(false); // Mengontrol modal

  const handleSearch = (e) => {
    const search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilterPokemons(search);
  };

  const handleFilter = (type) => {
    if (type === 'All') {
      setFilterPokemons(pokemons); // Tampilkan semua Pokémon jika memilih 'All'
    } else {
      const filtered = pokemons.filter((item) => item.types.includes(type));
      setFilterPokemons(filtered);
    }
    setShowModal(false); // Tutup modal setelah memilih filter
  };

  return (
    <div>
      <div className="w-[80vh] flex items-center justify-between my-4  mx-auto">
        <input type="text" placeholder="cari pokemon..." className="block w-[100%] p-4 text-lg shadow-md rounded-md border-2 border-black hover:shadow-custom-black transition-shadow duration-500" onChange={handleSearch} />

        {/* Tombol Filter dengan Icon */}
        <button onClick={() => setShowModal(true)} className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16M4 12h16M4 20h16" />
          </svg>
        </button>
      </div>

      {/* Daftar Pokemon */}
      <div className="flex justify-center gap-8 flex-wrap my-10 mx-auto">{filterPokemons.length === 0 ? <div>data tidak ditemukan</div> : filterPokemons.map((item) => <PokemonItem key={item.id} pokemon={item} />)}</div>

      <FilterModal showModal={showModal} handleFilter={handleFilter} closeModal={() => setShowModal(false)} pokemons={pokemons} />
    </div>
  );
}

export default PokemonList;
