import CartItemQuantity from "./CartItemQuantity";
export default function CartItem({item, removeFromCart, addToCart}){
    console.log(item);
    return(
        <li className="cart-item">
      <div className="cart-item-emoji" style={{ fontSize: "3rem" }}>
        {item.image} 
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <CartItemQuantity
          item={item}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </div>
    </li>
  );
}
   