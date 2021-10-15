import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{cartCtx.totalAmount < 0 ? `$${cartCtx.totalAmount}` : ''}</span>
      <span className={classes.badge}>{numberOfItems}</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
