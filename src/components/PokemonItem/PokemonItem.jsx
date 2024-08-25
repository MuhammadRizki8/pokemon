import { colours } from '../../data/colours';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PokemonItem({ pokemon }) {
  return (
    <div className="group relative overflow-hidden p-5 w-44 rounded-lg border-2 border-black shadow-md hover:shadow-custom-black transition-shadow duration-500" style={{ backgroundColor: pokemon.color }}>
      <Link to={`/pokemon/${pokemon.id}`} className="inline-block">
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

        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">See Details</button> */}
      </Link>
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
