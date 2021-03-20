import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  searchForm: {
    width: 500,
    height: 40,
    margin: '30px auto',
    background: '#444',
    background: 'rgba(0,0,0,.2)',
    borderRadius: 3,
    border: '1px solid #fff',
  },

  searchBar: {
    width: 370,
    padding: '10px 5px',
    float: 'left',
    color: '#ccc',
    border: 0,
    background: 'transparent',
    borderRadius: '3px 0 0 3px',
    '&:focus': {
      outline: 0,
      background: 'transparent',
    },
  },
  searchButton: {
    position: 'relative',
    float: 'right',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    height: 40,
    width: 120,
    color: '#fff',
    background: 'transparent',
    borderLeft: '1px solid #fff',
    borderRadius: ' 0 3px 3px 0',
    '&:hover': {
      background: ' #fff',
      color: '#444',
    },
    '&:active': {
      boxShadow: '0px 0px 12px 0px rgba(225, 225, 225, 1)',
    },
    '&:focus': {
      outline: 0,
    },
  },
});

export default useStyles;
