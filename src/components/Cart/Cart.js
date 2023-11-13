import { AiOutlineClose } from "react-icons/ai";
import {LuShoppingBasket} from "react-icons/lu"
import classes from "./Cart.module.css";
import { Colors } from "../constants/colors";
import Modal from "../UI/Modal";
import { useEffect, useState, useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const cartCtx = useContext(CartContext);
  const cartList = cartCtx.meals;

  useEffect(() => {
    if (cartList.length !== 0) {
      setIsEmptyCart(false);
    } else {
      setIsEmptyCart(true);
    }
  }, [cartList]);

  return (
    <Modal onHideCart={props.onHideCart}>
      <AiOutlineClose
        color={Colors.secondaryColor}
        size={32}
        onClick={props.onHideCart}
        style={{ cursor: "pointer", marginBottom: '0.75rem'}}
      />
      <div className={classes.orderList}>
        {cartList.map((meal) => {
          const mealInfo = {
            name: meal.name,
            amount: meal.amount,
            price: meal.price,
            id: meal.id,
          };
          return <CartItem mealInfo={mealInfo} key={meal.id} />;
        })}
      </div>
      {!isEmptyCart ? (
        <button
          className={classes.orderButton}
          style={{
            backgroundColor: Colors.secondaryColor,
            color: Colors.textColor,
          }}
        >
          Go to checkout • ${cartCtx.totalAmount.toFixed(2)}
        </button>
      ) : (
        <div className={classes.emptyCart}>
          <LuShoppingBasket size={45} color={Colors.textColor}/>
          <p className={classes.emptyCartText} style={{color : Colors.textColor}}>Add items from a restaurant or store to start a new cart</p>
        </div>
        
      )}
    </Modal>
  );
}

export default Cart;
