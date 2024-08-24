import { colours } from '../../data/colours';
import PropTypes from 'prop-types';

function PokemonItem({ pokemon }) {
  return (
    <div className="group relative overflow-hidden p-5 w-44 rounded-lg border-2 border-black shadow-md" style={{ backgroundColor: pokemon.color }}>
      <img className="mx-auto" src={pokemon.imageUrl} alt={pokemon.name} width={100} />
      <h1 className="text-xl font-bold text-center">{pokemon.name}</h1>
      <div className="flex justify-start gap-2 mt-2">
        {pokemon.types.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-lg border-2 border-black text-white text-xs"
            style={{
              backgroundColor: colours[item.toLowerCase()],
            }}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Gunakan group-hover dan transition untuk memperbaiki transisi */}
      <p className="absolute bottom-0 left-0 bg-white text-left p-2 text-xs transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">{pokemon.description}</p>
    </div>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonItem;
