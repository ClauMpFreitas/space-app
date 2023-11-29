import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 300px;
  }
`;

const Cabecalho = ({ setFiltro, filtro }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="" />
      <CampoTexto filtro={filtro} setFiltro={setFiltro} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
