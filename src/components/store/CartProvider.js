import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  meals: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === "ADD_MEAL") {

    const newMeal = action.meal;
    const newTotalAmount = state.totalAmount + (newMeal.price * newMeal.amount);
    const oldMeals = state.meals;

    if (oldMeals.some((meal) => meal.id === newMeal.id)) {
      const newMeals = oldMeals.map((meal) => {
        if (meal.id === newMeal.id) {
          return {
            ...meal,
            amount: meal.amount + newMeal.amount,
          };
        }
        return meal;
      });
      return {
        meals: newMeals,
        totalAmount: newTotalAmount,
      };
    } else {
      const newMeals = oldMeals.concat(newMeal);
      return {
        meals: newMeals,
        totalAmount: newTotalAmount,
      };
    }
  } 
  
  else {
    const removedId = action.id;
    const removedAmount = action.amount;
    const existingMeal = state.meals.find((meal) => meal.id === removedId);
    const newAmount = existingMeal.amount - removedAmount;
    const newTotalAmount =
      state.totalAmount - existingMeal.price * removedAmount;
    if (newAmount === 0) {
      const newMeals = state.meals.filter((meal) => meal.id !== removedId);
      return {
        meals: newMeals,
        totalAmount: newTotalAmount,
      };
    } else {
      const newMeals = state.meals.map((meal) => {
        if (meal.id === removedId) {
          return {
            ...meal,
            amount: newAmount,
          };
        }
        return meal;
      });
      return {
        meals: newMeals,
        totalAmount: newTotalAmount,
      };
    }
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addMealHandler = (meal) => {
    dispatchCartAction({
      type: "ADD_MEAL",
      meal: meal,
    });
  };

  const removeMealHandler = (id, amount = 1) => {
    dispatchCartAction({
      type: "REMOVE_MEAL",
      id: id,
      amount: amount,
    });
  };

  const cartContext = {
    meals: cartState.meals,
    totalAmount: cartState.totalAmount,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
