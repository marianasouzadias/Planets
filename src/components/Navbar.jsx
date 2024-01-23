import { Link } from "react-router-dom";

const Navbar = ({ planetsData }) => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          background: "1px solid black",
          listStyle: "none",
        }}
      >
        {planetsData.map((planet) => (
          <li
            key={planet.id}
            style={{
              marginLeft: "20px",
            }}
          >
            <Link to="/">Sistema Solar</Link>
            <Link to={`/planet/${planet.id}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
