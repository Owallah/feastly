import React from 'react';
import useMealsStore from '../context/useMealsStore';

const CategoryFilter: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = useMealsStore();

  return (
    <div className="category-filter">
      <h2>Filter by Category</h2>
      <select
        value={selectedCategory || ''}
        onChange={(e) => setSelectedCategory(e.target.value || null)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;