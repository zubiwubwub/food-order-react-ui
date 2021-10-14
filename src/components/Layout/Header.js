import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={classes['main-image']}
          src={mealsImage}
          alt='Table full of food'
        />
      </div>
    </Fragment>
  );
};

export default Header;
