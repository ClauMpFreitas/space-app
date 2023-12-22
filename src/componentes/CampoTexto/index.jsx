import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  align-self: center;
  display: flex;
  position: relative;
  width: 602px;

  @media screen and (max-width: 743px) {
    flex-grow: 1;
  }
`;

const InputEstilizado = styled.input`
  background-color: transparent;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  color: #d9d9d9;
  font-size: 1.25rem;
  height: 60px;
  line-height: 1.25rem;
  outline: none;
  padding: 0.75rem 1rem;
  width: 100%;
`;

const IconeLupa = styled.img`
  align-self: center;
  position: absolute;
  right: 18px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado
        placeholder="O que você procura?"
        onChange={(evento) => setFiltro(evento.target.value)}
      />
      <IconeLupa src={search} alt="Ícone de Lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
