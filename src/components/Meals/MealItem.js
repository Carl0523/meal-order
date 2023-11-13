import { Colors } from "../constants/colors";
import { useRef, useState, useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./MealItem.module.css";

function MealItem({ mealInfo }) {
  const cartCtx = useContext(CartContext);
  const [inputIsValid, setInputIsValid] = useState(true);
  const mealAmountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = mealAmountInputRef.current.value;
    const enteredAmountNumber = +mealAmountInputRef.current.value;

    
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setInputIsValid(false);
      return;
    } else {
      setInputIsValid(true);
      cartCtx.addMeal({
        amount: enteredAmountNumber,
        id: mealInfo.id,
        price: mealInfo.price,
        name: mealInfo.name,
      });
      mealAmountInputRef.current.value = '1';

    }
  };

  return (
    <div
      className={classes.mealItemContainer}
      style={{ backgroundColor: Colors.primaryColor }}
    >
      {/* 1. Left section: meal image and meal info (name, description, and price) */}
      <div className={classes.imageAndInfo}>
        <img src={mealInfo.imageUrl} alt={mealInfo.name} />

        <div className={classes.info} style={{ color: Colors.textColor }}>
          <span className={classes.name}>{mealInfo.name}</span>
          <span className={classes.description}>{mealInfo.description}</span>
          <span className={classes.price}>${mealInfo.price.toFixed(2)}</span>
        </div>
      </div>

      {/* 2. Right section: number of meals and the add button */}
      <form className={classes.amountAndButton} onSubmit={submitHandler}>
        <input
          type="number"
          name="amount"
          defaultValue={1}
          ref={mealAmountInputRef}
          style={{
            border: !inputIsValid
              ? "1px solid red"
              : "none",
          }}
        />
        <button
          style={{
            color: Colors.textColor,
            backgroundColor: Colors.secondaryColor,
          }}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}

export default MealItem;
