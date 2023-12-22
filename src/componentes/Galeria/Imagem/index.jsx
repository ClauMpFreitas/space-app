import { useState } from "react";
import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  width: ${(props) => (props.$expandida ? "100%" : "auto")};

  & > img {
    display: block;
    width: 100%;
  }

  figcaption {
    background-color: #001634;
    padding: 1rem 1rem 1rem 1.375rem;

    h3,
    h4 {
      color: #fff;
      line-height: normal;
      margin: 0;
    }

    h3 {
      font-family: "GandhiSans-Bold";
      font-size: 1.25rem;
    }

    h4 {
      flex-grow: 1;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.$expandida ? "100%" : "246px")};

    figcaption {
      padding: 1rem;

      h3 {
        font-size: 1rem;
      }

      h4 {
        font-size: 0.875rem;
      }
    }
  }

  @media screen and (max-width: 743px) {
    max-width: 312px;
    width: ${(props) => (props.$expandida ? "100%" : "auto")};

    figcaption {
      padding: 0.5rem;
    }
  }
`;

const Rodape = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    gap: 1rem;
    margin-top: 0.25rem;
  }
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorito
    ? "/icones/favorito-ativo.svg"
    : "/icones/favorito-inativo.svg";

  return (
    <Figure $expandida={expandida}>
      <img src={foto.path} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="Ícone de favorito" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.svg" alt="Ícone de expandir" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
