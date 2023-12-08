import logo from "../images/logo.svg"; // to make it constantly refer to this file path even when it gets bundled in the public/index.html where the relative file path changes 
function Nav () {
  return(
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <h1> React Facts </h1>
      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/about"> About </a> </li>
        <li> <a href="/contact"> Contact </a> </li>
      </ul>
    </nav>
  )
}

export default Nav ;