export default function CartItem({item}){
    return(
        <section>
            <p>
                {item.name} {item.image}
            </p>
            <p>{item.quantity}</p>
        </section>
    )
}
   