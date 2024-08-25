import { useParams, useNavigate } from 'react-router-dom';
import pokemonJSON from '../../data/pokemon.json';
import { colours } from '../../data/colours';

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = pokemonJSON.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <div className="text-center text-2xl mt-10">Pokémon not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Navbar dengan Tombol Back */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Back</span>
        </button>
      </div>

      {/* Nama dan Gambar Pokémon */}
      <h1 className="text-4xl font-bold mb-4 text-center">{pokemon.name}</h1>
      <div className="flex justify-center">
        <img src={pokemon.imageUrl} alt={pokemon.name} className="w-full h-auto max-w-xs mb-6 rounded-lg shadow-lg" style={{ backgroundColor: pokemon.color }} />
      </div>

      {/* Deskripsi */}
      <p className="mb-6 text-lg text-center">{pokemon.description}</p>

      {/* Tipe Pokémon */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Types</h2>
        <div className="flex gap-2">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 text-white rounded-full"
              style={{
                backgroundColor: colours[type.toLowerCase()],
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Kemampuan Pokémon */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="mb-2">
              <strong>{ability.name}</strong>: {ability.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Statistik Pokémon */}
      {/* biasa */}
      {/* <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Stats</h2>
        <ul className="grid grid-cols-2 gap-4">
          {Object.entries(pokemon.stats).map(([stat, value], index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-lg text-center">
              <span className="font-semibold">{stat}</span>: {value}
            </li>
          ))}
        </ul>
      </div> */}
      {/* Progress bar */}
      <div className="mb-4">
        {Object.entries(pokemon.stats).map(([stat, value], index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">
              {stat}: {value}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(value / 100) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lokasi Pokémon */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Locations</h2>
        {pokemon.locations.length !== 0 ? (
          <ul className="list-disc list-inside">
            {pokemon.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;
