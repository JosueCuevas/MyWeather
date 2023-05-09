import styled from "styled-components";
import { IconContext } from "react-icons";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LocationInput = styled.input`
  width: 50vw;
  height: 32px;
  background-color: transparent;
  border: 0;
  border-bottom: thin solid var(--MW-1);
  outline: 0;
  color: var(--MW-1);
  transition: all 300ms ease-in-out;
  &::placeholder {
    color: var(--MW-alpha-1);
    transition: all 300ms ease-in-out;
  }
  &:focus-visible {
    border-bottom: thin solid var(--MW-6);
    &::placeholder {
      color: var(--MW-6);
    }
  }
`;
const LocationBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
const LForm = styled.form`
  display: flex;
  align-items: center;
`;

const LocationForm = () => {
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ pathname: "/search", search: `?city=${city}` });
    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <LForm onSubmit={handleSubmit}>
      <LocationInput
        type="text"
        name="city"
        placeholder="Another Location..."
        autoComplete="none"
        required
        onChange={handleChange}
      />
      <LocationBtn>
        <IconContext.Provider value={{ color: "white", size: "24px" }}>
          <GoSearch />
        </IconContext.Provider>
      </LocationBtn>
    </LForm>
  );
};

export default LocationForm;
