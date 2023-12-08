import logo from "../images/meme_logo.svg";

function Nav () {
  return(
    <nav className="header">
      <img src={logo} className="nav-logo" alt="logo" />
      <h3 className="nav-title"> Meme Generator </h3>
      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/about"> About </a> </li>
        <li> <a href="/contact"> Contact </a> </li>
      </ul>
    </nav>
  )
}

export default Nav ;