import logo from "../images/airbnb_logo.svg"; // to make it constantly refer to this file path even when it gets bundled in the public/index.html where the relative file path changes 
function Nav () {
  return(
    <nav>
      <img src={logo} id="nav-logo" alt="logo" />
      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/about"> About </a> </li>
        <li> <a href="/login"> Login </a> </li>
      </ul>
    </nav>
  )
}

export default Nav ;