import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loader: {
    margin: 'auto',
  },
  linksList: {
    padding: 0,
    margin: 0,
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    marginLeft: 20,
    marginBottom: 40,
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 50,
    width: 150,
    textAlign: 'center',
    cursor: 'pointer',
  },
  navLink: {
    textDecoration: 'none',
    color: '#e8c4c4',
    '&:active': {
      color: 'rgb(248, 245, 246)',
    },
  },

  movieWrapper: {
    padding: 10,
    width: 800,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    fontFamily: 'Josefin Sans, sans- serif',
    fontSize: 30,
    backgroundColor: '#000000',
  },
  goBackBtn: {
    marginBottom: 40,
    marginLeft: 40,
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 50,
    width: 150,
    textAlign: 'center',
    color: '#e8c4c4',
    cursor: 'pointer',
  },
  movieImg: {
    borderRadius: 10,
    marginBottom: 20,
    margin: 'auto',
    height: 441,
    overflow: 'hidden',
    width: 350,
  },
  movieDescrip: {
    textAlign: 'center',
    color: '#F0F8FF',
  },
  generesList: {
    textAlign: 'center',
    padding: 0,
  },
  genres: {
    marginBottom: 20,
  },
  actorsList: {
    margin: 0,
    padding: 20,
    display: 'grid',
    maxWidth: 'calc(100vw - 10px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actorItem: {
    backgroundColor: '#000000',
    width: 200,
    borderRadius: 10,
  },
  actorImg: {
    width: 200,
    height: 300,
    margin: 0,
  },
  actorInfo: {
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    color: '#F0F8FF',
  },
  reviewList: {
    width: 900,
    padding: 0,
    margin: 'auto',
  },
  reviewItem: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
    textAlign: 'center',
    color: '#F0F8FF',
  },
});

export default useStyles;
