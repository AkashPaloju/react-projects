import Box from "./box.jsx";
import boxesData from "../boxesdata";
import { useState } from "react";

function Boxes () {
  const [boxes, setBoxes] = useState(boxesData);
  function toggle(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map(box => {
        return box.id === id ? {...box, on: !box.on} : box 
      })
    })
  }
  const boxComponents = boxes.map(box => {
    return (
      <Box 
        key={box.id}
        on = {box.on} 
        toggle = {() => toggle(box.id)} 
      />
    )
  })
  return (
    <div className="boxes">
      {boxComponents}
    </div>
  )
}

export default Boxes ;