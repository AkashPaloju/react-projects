import { Link } from 'react-router-dom';
import BankLogo from '../images/JBanklogo.jpg';

function Navbar() {
    return (
      <nav  id="heading">
        <div >
          <img src={BankLogo} width="150px" height="150px" alt="logo" />
        </div>
        <div class="title">
          <h1 id="bankName">City Bank  of  Jabalpur</h1>
          <ul class="nav" type="none">
            <li><Link to="/">Home</Link></li>|
            <li><Link to="/about">About Us</Link></li>|
            <li><Link to="/dashboard">Dashboard</Link></li>|
            <li><Link to="/account">Account</Link></li>|
            <li><Link to="/loan">Loan</Link></li>|
            <li><Link to="/deposit">Deposit</Link></li>|
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar ;