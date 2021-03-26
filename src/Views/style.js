import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  trending: {
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans- serif',
    fontSize: 80,
    color: '#F0F8FF',
  },
  movieTrend: {
    margin: 0,
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieItem: {
    width: 350,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    fontFamily: 'Josefin Sans, sans- serif',
    fontSize: 30,
    backgroundColor: '#000000',
    objectFit: 'cover',
    transition: 'transform 250ms cubic - bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.03)',
      cursor: 'zoom-in',
    },
  },
  movieImg: {
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 0,
    height: 441,
    overflow: 'hidden',
    width: 350,
  },
  movieTitle: {
    color: '#F0F8FF',
    marginBottom: 20,
    textAlign: 'center',

    borderRadius: 10,
  },
});

export default useStyles;
