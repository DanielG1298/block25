import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./plants/PlantList.jsx";
import Cart from "./cart/cart.jsx";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
   if (itemExists) {
    setCart(prev =>
      prev.map((item) =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  } else {
    const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
  }
};
const removeFromCart = (itemToRemove) => {
    setCart(
      cart.map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        
        .filter((item) => item.quantity > 0),
    );
  };
  console.log("🛒 CART CONTENTS:", cart);

  return (
    <>
      <h1>Proper Plants</h1>
      <main className="plantShop">
        <section>
          <PlantList plants={PLANTS} addToCart={addToCart}/>
          <Cart cart={cart} 
          removeFromCart={removeFromCart}
          addToCart={addToCart} />
        </section>
      </main>
    </>
  );
}
