import { useState } from 'react';
import useStyles from './style';

const SearchBar = ({ onSubmit }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <input
        type="text"
        value={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleInputChange}
        className={classes.searchBar}
      />
      <button type="submit" className={classes.searchButton}>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
