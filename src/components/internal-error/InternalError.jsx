import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 75%;
    text-align: center;
    a {
      color: var(--MW-6);
      &:hover {
        color: var(--MW-2);
      }
    }
  }
`;
const InternalError = () => {
  return (
    <Container>
      <p>¯\_(ツ)_/¯</p>
      <p>
        Sorry, we&apos;re having internal troubles, please try later or{" "}
        <a href="https://twitter.com/@josuecuevs">notify me</a> if you want
      </p>
    </Container>
  );
};

export default InternalError;
