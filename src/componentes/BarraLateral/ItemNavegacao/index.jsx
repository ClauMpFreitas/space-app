import styled from "styled-components";

const ItemEstilizado = styled.li`
  align-items: center;
  column-gap: 1.125rem;
  display: flex;
`;

const LinkEstilizado = styled.a`
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  cursor: pointer;
  font-family: ${(props) => props.$ativo && "GandhiSans-Bold"};
  font-size: 1.5rem;
  line-height: normal;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} />
      <LinkEstilizado $ativo={ativo}>{children}</LinkEstilizado>
    </ItemEstilizado>
  );
};

export default ItemNavegacao;
