import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { colours } from '../../data/colours';

function FilterModal({ showModal, handleFilter, closeModal, pokemons }) {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  // Extract unique types from pokemons
  useEffect(() => {
    const uniqueTypes = [...new Set(pokemons.flatMap((pokemon) => pokemon.types))];
    setTypes(uniqueTypes);
  }, [pokemons]);

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType); // Update state nilai filter
    handleFilter(newType); // Panggil fungsi handleFilter untuk menerapkan filter
  };

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white p-6 rounded-md w-3/6 transition-transform duration-500 transform ${showModal ? 'translate-x-0' : 'translate-x-full'}`}>
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
          <select
            id="type-filter"
            value={selectedType}
            style={{
              backgroundColor: colours[selectedType.toLowerCase()],
              color: selectedType === 'All' ? 'black' : 'White',
            }}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded-md text-slate-700"
          >
            <option value="All">All</option>
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
