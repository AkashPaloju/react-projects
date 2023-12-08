
function Box (props) {
    const boxStyles = {
      backgroundColor: props.on ? "black" : "cyan",
    }
    return (
        <div 
        style={boxStyles}
        className="box"
        onClick={props.toggle}
        >
        </div>
    );
}

export default Box ;