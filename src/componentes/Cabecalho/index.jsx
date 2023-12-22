import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import BotaoIcone from "../BotaoIcone";

const HeaderEstilizado = styled.header`
  display: flex;
  gap: 0 1.5rem;
  justify-content: space-between;
  padding: 3.75rem 0 4rem;

  img {
    height: auto;
    max-width: 212px;
  }

  @media screen and (max-width: 1024px) {
    gap: 0 3.625rem;
    padding: 2.5rem 0 2.75rem;
  }

  @media screen and (max-width: 743px) {
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 1.5rem 0 2rem;

    img {
      height: auto;
      max-width: 156px;
    }
  }
`;

const BotaoMenu = styled(BotaoIcone)`
  display: none;
  height: 32px;
  width: 32px;

  img {
    height: auto;
    width: 32px;
  }

  @media screen and (max-width: 743px) {
    display: block;
  }
`;

const Cabecalho = ({ setFiltro, setMenuAberto }) => {
  return (
    <HeaderEstilizado>
      <BotaoMenu onClick={() => setMenuAberto(true)}>
        <img src="/icones/menu.svg" alt="Ícone de menu" />
      </BotaoMenu>
      <img src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
