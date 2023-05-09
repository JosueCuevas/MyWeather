import { useContext } from "react";
import styled from "styled-components";
import LC_Context from "../../Contexts/LastCities";
import { Link } from "react-router-dom";

const LastsCities = styled.section`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-weight: 300;

  a {
    color: var(--MW-1);
  }
`;

const LastLocations = () => {
  const { lastCities } = useContext(LC_Context);
  return (
    <LastsCities>
      {lastCities.map((city, i) => (
        <Link to={`/search?city=${city.name}`} key={i}>
          {city.name}
        </Link>
      ))}
    </LastsCities>
  );
};

export default LastLocations;
