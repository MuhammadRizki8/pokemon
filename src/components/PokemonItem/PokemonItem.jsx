import './PokemonItem.css';
import { colours } from '../../data/colours';
import PropTypes from 'prop-types';
function PokemonItem({ pokemon }) {
  return (
    <div className="pokemon-card " style={{ backgroundColor: pokemon.color }}>
      <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      <h1 className="text-2xl font-bold">{pokemon.name}</h1>
      <div className="types-container">
        {pokemon.types.map((item, index) => (
          <span
            key={index}
            className="type-badge"
            style={{
              backgroundColor: colours[item.toLowerCase()],
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="description">{pokemon.description}</p>
    </div>
  );
}
// Menambahkan validasi prop-types
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
