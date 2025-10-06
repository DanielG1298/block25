import CartItem from "./cartItem";
export default function Cart ({cart}){
    console.log(cart.map)
    return(
        <section>
        <h2>Cart</h2>
        {cart.map((item)=>{
            return <CartItem key={item.id}>{item.name}</CartItem>;
        })}
        </section>
    )
}