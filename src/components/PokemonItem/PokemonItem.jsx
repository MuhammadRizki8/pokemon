import { colours } from '../../data/colours';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonItem({ pokemon }) {
  return (
    <div
      className="group relative overflow-hidden p-5 w-40 md:w-44 lg:w-48 xl:w-60 rounded-lg border-2 border-black shadow-md hover:shadow-custom-black transition-shadow duration-500 flex flex-col items-center"
      style={{ backgroundColor: pokemon.color }}
    >
      <Link to={`/pokemon/${pokemon.id}`} className="inline-block text-center">
        {/* Gambar Pokémon */}
        <img className="mx-auto w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-transform duration-300" src={pokemon.imageUrl} alt={pokemon.name} />

        {/* Nama Pokémon */}
        <h1 className="text-xl md:text-2xl font-bold mt-2">{pokemon.name}</h1>

        {/* Tipe Pokémon */}
        <div className="flex justify-center gap-1 mt-2">
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg border-2 border-black text-white text-xs md:text-sm"
              style={{
                backgroundColor: colours[item.toLowerCase()],
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </Link>
      {/* Deskripsi dengan transisi yang lebih halus */}
      <p className="absolute bottom-0 left-0 w-full bg-white text-left p-2 text-xs md:text-sm transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">{pokemon.description}</p>
    </div>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonItem;
