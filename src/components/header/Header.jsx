import styled from "styled-components";
import LocationForm from "../location-form/LocationForm";

const MyHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 11vw;
  padding-top: 1rem;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <MyHeader>
      <LocationForm />
    </MyHeader>
  );
};

export default Header;
