import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./App.css";
import Cart from './components/Cart/Cart';
import React, { useState } from "react";

import CartProvider from "./components/store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return <CartProvider>
    {showCart && <Cart onHideCart={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <Meals/>
  </CartProvider>;
}

export default App;
