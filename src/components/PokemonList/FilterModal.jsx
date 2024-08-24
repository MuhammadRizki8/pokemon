import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { colours } from '../../data/colours';

function FilterModal({ showModal, handleFilter, closeModal, pokemons }) {
  const [types, setTypes] = useState([]);

  // Extract unique types from pokemons
  useEffect(() => {
    const uniqueTypes = [...new Set(pokemons.flatMap((pokemon) => pokemon.types))];
    setTypes(uniqueTypes);
  }, [pokemons]);
  if (!showModal) return null; // Jika showModal false, jangan render modal.

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold mr-10">Filter by Type</h2>
          <button onClick={closeModal} className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300">
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="type-filter" className="block text-sm font-medium">
            Select Type:
          </label>
          <select id="type-filter" onChange={(e) => handleFilter(e.target.value)} className="w-full px-1 py-2 border border-gray-300 rounded-md">
            <option value="">All</option>
            {types.map((type) => (
              <option
                key={type}
                value={type}
                style={{
                  backgroundColor: colours[type.toLowerCase()],
                }}
              >
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

FilterModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleFilter: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default FilterModal;
