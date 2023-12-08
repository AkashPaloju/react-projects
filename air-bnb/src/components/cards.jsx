import data from "../data.js";
import Card from "./card";

function Cards () {
  const cards = data.map ( item => {
    return (<Card 
            key = {item.id}
            {...item}
          />)
  })
  return (
    <div className="total-cards">
      {cards}
    </div>
  )
}

export default Cards;