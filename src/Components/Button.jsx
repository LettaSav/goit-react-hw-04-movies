import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loadButton: {
    margin: '20 auto',
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 50,
    width: 150,
    textAlign: 'center',
    color: '#212121',
  },
});

const Button = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.loadButton}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
