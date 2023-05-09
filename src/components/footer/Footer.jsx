import styled from "styled-components";

const MyFooter = styled.footer`
  position: absolute;
  bottom: -35.5%;
  width: 100vw;
  background-color: var(--MW-7);
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    text-align: center;
    padding: 0.5rem;
    font-size: 12px;
    a {
      color: var(--MW-1);
      text-decoration: underline;
      &:hover {
        color: var(--MW-6);
      }
    }
  }
  @media (min-width: 768px) {
    bottom: -5.8%;
  }
  @media (min-width: 992px) {
    bottom: 0;
  }
`;
const Footer = () => {
  return (
    <MyFooter>
      <p>My Weather v1.0.1 </p>
      <p>
        Created By{" "}
        <a
          href="https://twitter.com/@josuecuevs"
          target="_blank"
          rel="noreferrer"
        >
          Josu&eacute; Cuevas
        </a>
      </p>
    </MyFooter>
  );
};

export default Footer;
