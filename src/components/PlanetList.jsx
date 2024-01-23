import { useParams } from "react-router-dom";
import planetData from "../data/planets.json";

const PlanetList = () => {
  const { id } = useParams();

  const planet = planetData.find((planet) => planet.id === id);
  return (
    <div>
      <h2>{planet.name}</h2>
      <h4>Tamanho</h4>
      <p>Diâmetro km:{planet.size.diameter_km}</p>
      <p>Diâmetro do terraço: {planet.size.diameter_terrastam}</p>
      <h4>Atmosfera</h4>
      <p>Composição: {planet.atmosphere.composition}</p>
      <p>Pressão: {planet.atmosphere.pressure}</p>
      <h4>Características</h4>
      <p>Gravidade:{planet.characteristics.gravity}</p>
      <p>Temperatura média:{planet.characteristics.average_temperature}</p>
      <p>Sátelites: {planet.characteristics.satellites}</p>
      <p>Órbita: {planet.characteristics.orbit}</p>
      <p>Rotação: {planet.characteristics.rotation}</p>
      <img
        src={planet.image}
        alt={` planeta ${planet.name}`}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default PlanetList;
