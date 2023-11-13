import React from 'react'
import classes from "./Header.module.css";
import { logo, food } from "../../assets";
import CartButton from './CartButton';
import { Colors } from '../constants/colors';

function Header({onShowCart}) {
  return (
    <React.Fragment>

      <header className={classes.header} style={{backgroundColor: Colors.primaryColor}}>
        <div className={classes.logo} onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo" className={classes.image} />
          <h2>Uterra</h2>
        </div>
        <CartButton onShowCart={onShowCart}/>
      </header>

      <div className={classes.headerImage}>
        <img src={food} alt='logo'/>
      </div>
    </React.Fragment>
  );
}

export default Header;
