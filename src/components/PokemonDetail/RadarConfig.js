export const RadarData = (pokemon) => ({
  labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
  datasets: [
    {
      label: `${pokemon.name} Stats`,
      data: [pokemon.stats.HP, pokemon.stats.Attack, pokemon.stats.Defense, pokemon.stats['Special Attack'], pokemon.stats['Special Defense'], pokemon.stats.Speed],
      backgroundColor: 'rgba(34, 202, 236, 0.2)', // Warna area
      borderColor: 'rgba(34, 202, 236, 1)', // Warna garis
      pointBackgroundColor: 'rgba(34, 202, 236, 1)', // Warna titik
      borderWidth: 2,
    },
  ],
});

export const RadarOptions = {
  scales: {
    r: {
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        showLabelBackdrop: false,
      },
      angleLines: {
        color: 'rgba(255, 255, 255, .3)',
        lineWidth: 1,
      },
      gridLines: {
        color: 'rgba(255, 255, 255, .3)',
        circular: true,
      },
    },
  },
};
