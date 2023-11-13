import classes from "./MealSummary.module.css";
import { Colors } from "../constants/colors";

function MealSummary() {
  return (
    <div
      className={classes.summaryContainer}
      style={{
        backgroundColor: Colors.secondaryColor,
        color: Colors.textColor,
      }}
    >
      <h2>Order On Uterra</h2>
      <p>
        Our mission is to make ordering a breeze! Whether you're looking for
        delicious food, shopping for essentials! Uterra has got you covered.
      </p>
    </div>
  );
}

export default MealSummary;
