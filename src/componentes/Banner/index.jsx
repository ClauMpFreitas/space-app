import styled from "styled-components";

const FigureEstilizada = styled.figure`
  align-items: center;
  background: url(${(props) => props.$imagem}) center / cover no-repeat;
  border-radius: 20px;
  display: flex;
  grid-area: banner;
  height: 328px;
  margin: 0;
  padding: 0 4rem;

  @media screen and (max-width: 1024px) {
    height: 276px;
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 743px) {
    height: 140px;
  }
`;

const TituloEstilizado = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  min-width: 266px;
  width: 29.5%;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 743px) {
    font-size: 1.5rem;
    max-width: 260px;
    min-width: 180px;
    width: 100%;
  }
`;

const Banner = ({ imagemFundo, texto }) => {
  return (
    <FigureEstilizada $imagem={imagemFundo}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
