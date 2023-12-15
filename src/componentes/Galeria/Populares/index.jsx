import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";
import React, { useState } from "react";

const ColunaFotos = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  gap: 16px;

  @media screen and (max-width: 720px) {
    gap: 8px;
    margin: 15px;
  }
`;

const Botao = styled.button`
  border-radius: 10px;
  border: 2px solid var(--Degrad-com-rosa, #c98cf1);
  width: 208px;
  height: 56px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: transparent;
  padding: 2px;
  margin-top: 24px;

  @media screen and (max-width: 720px) {
    width: 150px;
    padding: 0;
    margin: 15px;
  }
`;

const Imagem = styled.img`
  max-width: 212px;

  @media screen and (max-width: 720px) {
    width: 150px;
    justify-content: flex-end;
  }
`;

const Populares = () => {
  const [mostrarMais, setMostrarMais] = useState(false);
  const fotosExibidas = mostrarMais ? fotos : fotos.slice(0, 3);

  const handleVerMaisClick = () => {
    setMostrarMais(true);
  };

  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>

      <ColunaFotos>
        {fotosExibidas.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      {!mostrarMais && <Botao onClick={handleVerMaisClick}>Ver mais</Botao>}
    </section>
  );
};

export default Populares;
