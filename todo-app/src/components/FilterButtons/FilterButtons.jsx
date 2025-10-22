const FilterButtons = ({ currentFilter, setCurrentFilter }) => {
  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'active', label: 'Активные' },
    { key: 'completed', label: 'Завершенные' }
  ];

  const onFilterChange = (key) => {
    setCurrentFilter(key)
  }

  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;