

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

export default Die;