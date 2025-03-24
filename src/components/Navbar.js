import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/transaction"}>Transaction</Link>
        </li>
        <li>
          <Link to={"/reports"}>Reports</Link>
        </li>
        <li>
          <Link to={"/get-quote"}>Get Quote</Link>
        </li>
        <li>
          <Link to={"/reset"}>Reset</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar