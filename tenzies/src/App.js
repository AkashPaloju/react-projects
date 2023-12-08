// import Die from './die';
import { useEffect, useState } from 'react';
import './App.css';

function Die(props) {
  const styles = {
    backgroundColor: props.isLocked ? "#59E391" : "white",
  }
  return (
    <div style={styles} className="die" onClick={props.toggle}>
      <p>{props.value}</p>
    </div>
  )
}

function App() {
  const [dice,setDice] = useState(allNewDice());
  const [won,setWon] = useState(false);

  useEffect (() => {
    const firstValue = dice[0].value;
    const allSame = dice.every(die => die.value===firstValue);
    const allLocked = dice.every(die => die.isLocked===true);
    if(allLocked && allSame) {
      setWon(true);
    }

  }, [dice])

  function allNewDice() {
    const newDice = [];
    for(let i=0;i<10;i++) {
      newDice.push({
        id : i+1,
        value : Math.ceil(Math.random()*6),
        isLocked : false
      });
    }
    return newDice;
  }

  function rollDice() {
    if(!won) {
      setDice(oldDice => oldDice.map(die => {
          return die.isLocked ?  die : {...die, value : Math.ceil(Math.random()*6)}
        })
      )
    } else {
      setDice(allNewDice());
      setWon(false);
    }
  }

  function lockDie(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id===id ? {...die,isLocked : !die.isLocked }: die
      })
    )
  }


  const diceComponents = dice.map((die) => {
    return (
      <Die key={die.id} value={die.value} isLocked ={die.isLocked} toggle={() => lockDie(die.id)} />
    )
  })



  return (
    <div className="App">
      <main>
        <h1>Tenzies Game</h1>
        <div className="dice-container">
          {diceComponents}
        </div>
        <h2>{ won ? "Tenzies!" : "" }</h2>
        <button onClick={rollDice}> { won ? "Reset" : "Roll" } </button>
      </main>
    </div>
  );
}

export default App;
