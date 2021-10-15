import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Total Amount</span>
      <span className={classes.badge}>3</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
