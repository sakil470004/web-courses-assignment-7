import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='ma2 pa3 tc '>
      <input
        className='pa3 b--none bg-lightest-blue br-pill'
        type='search'
        placeholder='Search course'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;