import React from 'react'
import css from './Filter.module.css'

const Filter = ({ handleChangeFilter }) => {
  return (
    <div>
      <label>
        
        <input
          className={css.filter}
          placeholder='Find contacts by name'
          type="text"
          name="searching"
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter