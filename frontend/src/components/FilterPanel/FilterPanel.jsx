import React from 'react';

import PriceSlider from '../PriceSlider/PriceSlider';
import styles from './FilterPanel.css';
import find from './images/find.png';

const FilterPanel = () => {
  return (
    <div className={styles.filterPanel} data-testid="filter-panel">
      <div className={styles.filterSearch}>
        <input type="text" placeholder="Search..." />
        <img src={find} alt="search" />
      </div>
      <div className={styles.filterCategory}>
        <select className={styles.categoryDropdown} data-testid="categoryDropdown">
          <option>All</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
      </div>
      <div>
        <select className={styles.sortDropdown} defaultValue="" data-testid="sortDropdown">
          <option value="" disabled>
            Sort by
          </option>
          <option>Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <PriceSlider />

      <div className={styles.filterToggle} data-testid="filterToogle">
        <label>
          <span>On sale</span>
          <div className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </div>
        </label>
        <label>
          <span>In stock</span>
          <div className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
