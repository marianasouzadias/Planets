import { Link } from "react-router-dom";
import "../styles/Navbar.style.css";
const Navbar = ({ planetsData }) => {
  return (
    <nav className="navbar-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Sistema Solar
          </Link>
        </li>
        {planetsData.map((planet) => (
          <li key={planet.id}>
            <Link to={`/planet/${planet.id}`} className="nav-link">
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
