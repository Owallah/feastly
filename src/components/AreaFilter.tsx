import React from 'react';
import useMealsStore from '../context/useMealsStore';

const AreaFilter: React.FC = () => {
  const { areas, selectedArea, setSelectedArea } = useMealsStore();

  return (
    <div className="area-filter">
      <h2>Filter by Area</h2>
      <select
        value={selectedArea || ''}
        onChange={(e) => setSelectedArea(e.target.value || null)}
      >
        <option value="">All Areas</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaFilter;