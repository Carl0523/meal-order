import MealItem from "./MealItem";
import classes from "./MealList.module.css";
import { Colors } from "../constants/colors";
import { sushi, friedRice, burger, lobster } from "../../assets";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    imageUrl: sushi
  },
  {
    id: "m2",
    name: "Fried Rice",
    description: "A german specialty!",
    price: 16.5,
    imageUrl: friedRice
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    imageUrl: burger
  },
  {
    id: "m4",
    name: "Lobster",
    description: "Boston Lobster, seafood",
    price: 50.99,
    imageUrl: lobster
  },
];

function MealList() {
  return (
    <div className={classes.listContainer} style={{backgroundColor: Colors.secondaryColor}}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
            const mealInfo = {
                id : meal.id,
                name : meal.name,
                description : meal.description,
                price : meal.price,
                imageUrl : meal.imageUrl
            }
          return (
            <MealItem
              key={meal.id}
              mealInfo={mealInfo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MealList;
