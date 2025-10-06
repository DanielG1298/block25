
export default function PlantCard({plant, addToCart}){
    return(
        <section>
        <p>{plant.image} </p>
        <h3>{plant.name}</h3>
        <button onClick={()=>addToCart(plant)}>add to cart</button>
        </section>
        
    );
}console.log(PlantCard)