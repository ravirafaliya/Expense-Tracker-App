import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect } from "react";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  },[location]);

  return (
    <nav className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>Dashboard</Link>
        </li>
        <li className={location.pathname === "/transaction" ? "active" : ""}>
          <Link to={"/transaction"}>Transaction</Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
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