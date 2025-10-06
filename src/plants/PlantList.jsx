import PlantCard from "./PlantCard.jsx";

export default function PlantList({plant, addToCart}){
    return( 
        <section className="plants">
          <h2>plants</h2>
          {plant.map((item) =>{
          <PlantCard key={item.id} plant={item} addToCart={addToCart} />
          })}
        </section>
    );
      
    
        
}console.log(PlantList)