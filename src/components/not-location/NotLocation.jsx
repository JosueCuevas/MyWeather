import styled from "styled-components";
import LocationForm from "../location-form/LocationForm";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 90%;
    text-align: center;
    margin: 0;
  }
  form {
    margin-top: 2rem;
  }
`;

// eslint-disable-next-line react/prop-types
const NotLocation = ({ msg }) => {
  return (
    <Container>
      <p>{msg}</p>
      <p>Please introduce a city to look for its weather</p>
      <LocationForm />
    </Container>
  );
};

export default NotLocation;
