import { useState } from 'react';
import pokemonJSON from '../../data/pokemon.json';
import PokemonItem from '../PokemonItem/PokemonItem';
import FilterModal from './FilterModal'; // Import komponen modal

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);
  const [showModal, setShowModal] = useState(false); // Mengontrol modal
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 10;
  const totalPages = Math.ceil(filterPokemons.length / pokemonsPerPage);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filterPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const handleSearch = (e) => {
    const search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterPokemons(search);
    setCurrentPage(1); // Reset halaman ke 1 setelah pencarian
  };

  const handleFilter = (type) => {
    if (type === 'All') {
      setFilterPokemons(pokemons); // Tampilkan semua Pokémon jika memilih 'All'
    } else {
      const filtered = pokemons.filter((item) => item.types.includes(type));
      setFilterPokemons(filtered);
    }
    setShowModal(false); // Tutup modal setelah memilih filter
    setCurrentPage(1); // Reset halaman ke 1 setelah filter
  };

  // Fungsi untuk berpindah halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="bg-blue-500 text-white py-2 px-4 font-jura">
        <h1 className="text-xl sm:text-lg font-bold">Hallo</h1>
        <p className="mt-2">ini website buat main-main react-tailwind. pokoknya tempat nyoba2 frontend</p>
      </div>
      <div className="flex sm:flex-row justify-center items-center w-3/4 sm:w-1/2 mx-auto my-4 gap-4">
        <input type="text" placeholder="cari pokemon..." className="block w-full p-2 text-lg shadow-md rounded-md border-2 border-black hover:shadow-custom-black transition-shadow duration-500" onChange={handleSearch} />

        {/* Tombol Filter dengan Icon */}
        <button onClick={() => setShowModal(true)} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16M4 12h16M4 20h16" />
          </svg>
        </button>
      </div>

      {/* Daftar Pokemon */}
      <div className="container w-full sm:w-10/12 sm:mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-2 sm:gap-6 mt-10 mb-5">
        {filterPokemons.length === 0 ? <div>data tidak ditemukan</div> : currentPokemons.map((item) => <PokemonItem key={item.id} pokemon={item} />)}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className={`mx-1 px-3 py-1 text-sm sm:text-base border rounded-md ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      {/*filter modal  */}
      <FilterModal showModal={showModal} handleFilter={handleFilter} closeModal={() => setShowModal(false)} pokemons={pokemons} />
    </div>
  );
}

export default PokemonList;
