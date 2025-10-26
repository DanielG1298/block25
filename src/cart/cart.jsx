import CartItem from "./cartItem";
import "./cart.css"
export default function Cart({ cart,addToCart,removeFromCart }) {

  return (
    <>
      <section>
        <h2>cart</h2>
        {cart.map((item) => (
          <CartItem key={item.id} 
          item={item} 
          addToCart={addToCart}
          removeFromCart={removeFromCart}/>
        ))}
      </section>
    </>
  );
}
