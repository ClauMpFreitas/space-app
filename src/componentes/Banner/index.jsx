import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 300px;
  margin: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 20px;
  width: 96%;
  background-size: cover;

  @media screen and (max-width: 720px) {
    margin: 0;
    width: 96%;
    height: 100px;
  }
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;

  @media screen and (max-width: 720px) {
    text-align: center;
  }
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
