import { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Colors } from "../constants/colors";
import CartContext from "../store/cart-context";

function CartButton(props) {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.meals.reduce((currNumber, meal) => {
    return currNumber + meal.amount;
  }, 0);

  const buttonClass = `${classes.cartButton} ${ isButtonHighlighted && classes.bump}`

  useEffect(()=>{
    if (numberOfCartItems === 0)
    {
      return;
    }
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false)
    }, 600)

    return () => {
      clearTimeout(timer);
    }

  }, [numberOfCartItems])

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor: Colors.secondaryColor }}
      onClick={props.onShowCart}
    >
      <span className={classes.cartIcon}>
        <AiOutlineShoppingCart size={24} color="white" />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span
        className={classes.cartNumber}
        style={{ backgroundColor: Colors.primaryColor }}
      >
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default CartButton;
