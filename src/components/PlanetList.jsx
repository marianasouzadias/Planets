import { useParams } from "react-router-dom";
import planetData from "../data/planets.json";
import "../styles/PlanetList.css";

const PlanetList = () => {
  const { id } = useParams();

  const planet = planetData.find((planet) => planet.id.toString() === id);
  console.log(planet);
  if (!planet) {
    return <div>Planeta não encontrado</div>;
  }
  return (
    <div className="container">
      <div className="text">
        <h2 className="h2">{planet.name}</h2>
        <img src={planet.image} class="image" alt={` planeta ${planet.name}`} />
        <p>{planet.description}</p>
      </div>
    </div>
  );
};

export default PlanetList;
