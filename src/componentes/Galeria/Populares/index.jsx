import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";
import React, { useState } from "react";

const ColunaFotos = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;

  @media screen and (max-width: 1024px) {
    margin: 1rem;
  }

  @media screen and (max-width: 743px) {
    align-items: justify;
    margin: 2rem;
    width: 100%;
  }
`;

const Imagem = styled.img`
  border-radius: 10px;
  max-width: 212px;

  @media screen and (max-width: 1024px) {
    height: 158px;
    max-width: 300px;
  }

  @media screen and (max-width: 743px) {
    width: 80%;
  }
`;

const Botao = styled.button`
  background: none;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-family: "GandhiSans-Bold";
  font-size: 1.25rem;
  line-height: normal;
  padding: 0.875rem;
  width: 100%;

  @media screen and (max-width: 743px) {
    width: 60%;
  }
`;

const Populares = () => {
  const [quantidadeExibida, setQuantidadeExibida] = useState(3);
  const totalFotos = fotos.length;
  const maisFotosDisponiveis = totalFotos - quantidadeExibida;

  const handleVerMaisClick = () => {
    const novasFotosExibidas =
      quantidadeExibida + 2 <= totalFotos ? quantidadeExibida + 2 : totalFotos;

    setQuantidadeExibida(novasFotosExibidas);
  };

  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.slice(0, quantidadeExibida).map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      {maisFotosDisponiveis > 0 && (
        <Botao onClick={handleVerMaisClick}>Ver mais</Botao>
      )}
    </section>
  );
};

export default Populares;
