import { useRef, useContext } from "react";
import { Colors } from "../constants/colors";
import classes from "./CartItem.module.css";
import CartContext from "../store/cart-context";
import { BiSolidTrash } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function CartItem({ mealInfo }) {
  // const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  // const amountInputChangeHandler = () => {
  //   const currInput = amountInputRef.current.value;
  //   const currInputNumber = +amountInputRef.current.value;
  //   if (currInput.trim().length === 0 || currInputNumber > 9) {
  //     return;
  //   }
  //   else
  //   {
  //     cartCtx.addMeal()
  //   }
  // };

  const addOneHandler = () => {
    cartCtx.addMeal({
      amount: 1,
      id: mealInfo.id,
      price: mealInfo.price,
      name: mealInfo.name,
    });
  };

  const removeOneHandler = () => {
    cartCtx.removeMeal(mealInfo.id, 1);
  };

  const removeAllHandler = () => {
    cartCtx.removeMeal(mealInfo.id, mealInfo.amount);
  };

  const totalPrice = mealInfo.amount * mealInfo.price;
  return (
    <div
      className={classes.cartItemContainer}
      style={{ backgroundColor: Colors.secondaryColor }}
    >
      {/* 1. The remove icon, amount input and meal's name */}
      <div className={classes.amountAndName}>
        <BiSolidTrash
          color={Colors.textColor}
          size={26}
          cursor="pointer"
          onClick={removeAllHandler}
        />

        <div className={classes.mealInput}>
          <AiOutlineMinusCircle
            fontSize={24}
            color={Colors.textColor}
            cursor="pointer"
            onClick={removeOneHandler}
          />
          <input type="number" value={mealInfo.amount} disabled />
          <AiOutlinePlusCircle
            fontSize={24}
            color={Colors.textColor}
            cursor="pointer"
            onClick={addOneHandler}
          />
        </div>

        <span className={classes.mealName} style={{ color: Colors.textColor }}>
          {mealInfo.name}
        </span>
      </div>

      {/* 2. The total price of the meal */}
      <span className={classes.totalPrice} style={{ color: Colors.textColor }}>
        ${totalPrice.toFixed(2)}
      </span>
    </div>
  );
}

export default CartItem;
