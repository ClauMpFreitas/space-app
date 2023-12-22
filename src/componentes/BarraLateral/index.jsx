import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import BotaoIcone from "../BotaoIcone";

const BarraEstilizada = styled.aside`
  @media screen and (max-width: 743px) {
    background: linear-gradient(
      175deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    display: ${(props) => (props.$menuAberto ? "block" : "none")};
    left: 0;
    padding: 2.5rem 1.5rem;
    position: absolute;
    top: 0;
    width: auto;
  }
`;

const ListaEstilizada = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8125rem 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 212px;
`;

const BotaoFechar = styled(BotaoIcone)`
  align-items: center;
  display: none;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;

  img {
    height: auto;
    width: 16px;
  }

  @media screen and (max-width: 743px) {
    display: block;
  }
`;

const BarraLateral = ({ menuAberto, setMenuAberto }) => {
  return (
    <BarraEstilizada $menuAberto={menuAberto}>
      <BotaoFechar onClick={() => setMenuAberto(false)}>
        <img src="/icones/fechar.svg" alt="Ícone de fechar" />
      </BotaoFechar>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="icones/home-ativo.svg"
            iconeInativo="icones/home-inativo.svg"
            ativo
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/vistas-ativo.svg"
            iconeInativo="icones/vistas-inativo.svg"
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/curtidas-ativo.svg"
            iconeInativo="icones/curtidas-inativo.svg"
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/novas-ativo.svg"
            iconeInativo="icones/novas-inativo.svg"
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="icones/surpreenda-ativo.svg"
            iconeInativo="icones/surpreenda-inativo.svg"
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </BarraEstilizada>
  );
};

export default BarraLateral;
