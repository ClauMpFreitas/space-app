import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  align-items: center;
  background-color: #04244f;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin-top: 4.5rem;
  padding: 1.5rem;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 72px;
    margin-top: 3rem;
    padding: 1.25rem 1.5rem;
  }

  @media screen and (max-width: 743px) {
    flex-direction: column-reverse;
    height: 104px;
    margin-top: 2.5rem;
    padding: 1rem;
  }
`;

const IconesContainer = styled.ul`
  align-items: center;
  display: flex;
  gap: 2.125rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 743px) {
    gap: 2.625rem;
  }
`;

const Creditos = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <IconesContainer>
        <li>
          <a href="#">
            <img src="/icones/facebook.svg" alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/twitter.svg" alt="Ícone do Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icones/instagram.svg" alt="Ícone do Instagram" />
          </a>
        </li>
      </IconesContainer>
      <Creditos>
        Desenvolvido por{" "}
        <a
          href="https://github.com/ClauMpFreitas"
          target="_blank"
          rel="noreferrer"
        >
          Cláudia
        </a>
      </Creditos>
    </RodapeEstilizado>
  );
};

export default Rodape;
