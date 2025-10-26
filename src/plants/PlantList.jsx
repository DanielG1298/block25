import PlantCard from "./PlantCard.jsx";

export default function PlantList({plants, addToCart}){
    return( <>
        <section className="plants">
          <h2>plants</h2>
          <ul>
          {plants.map((plant) =>{ 
          return <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
})}
          </ul>
        </section></>
    );
      
    
        
}