import styled from "styled-components";
import tags from "./tags.json";

const TagsEstilizada = styled.section`
  align-items: center;
  display: flex;
  gap: 1.5rem;
  grid-area: tags;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media screen and (max-width: 1024px) {
    gap: 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 743px) {
    gap: 1.5rem 0.125rem;
    justify-content: space-evenly;
    margin-top: 0;
  }
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  width: 212px;

  @media screen and (max-width: 1024px) {
    width: auto;
  }

  @media screen and (max-width: 743px) {
    font-size: 1.25rem;
    text-align: center;
    width: 100%;
  }
`;

const BotaoEstilizado = styled.button`
  color: #fff;
  border: 2px solid;
  border-color: ${(props) => (props.$ativo ? "#C98CF1" : "transparent")};
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  font-size: 1.5rem;
  line-height: normal;
  padding: 0.5rem;

  @media screen and (max-width: 1024px) {
    min-width: 82px;
    padding: 0.5rem 0.25rem;
  }

  @media screen and (max-width: 743px) {
    font-size: 1rem;
    min-width: auto;
    padding: 0.8rem;
    max-width: 100%;
  }
`;

const Tags = ({ tag, setTag }) => {
  return (
    <TagsEstilizada>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((dados) => (
        <BotaoEstilizado
          key={dados.id}
          $ativo={dados.tag === tag}
          onClick={() => setTag(dados.tag)}
        >
          {dados.titulo}
        </BotaoEstilizado>
      ))}
    </TagsEstilizada>
  );
};

export default Tags;
