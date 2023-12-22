import styled from "styled-components";
import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const LayoutGaleria = styled.div`
  display: flex;
  gap: 1.5rem;
  grid-area: galeria;

  @media screen and (max-width: 1024px) {
    gap: 1.25rem;
  }

  @media screen and (max-width: 743px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const GaleriaContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    gap: 1.625rem;
  }

  @media screen and (max-width: 743px) {
    gap: 2rem;
  }
`;

const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
`;

const Galeria = ({
  fotos = [],
  tag,
  setTag,
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {
  return (
    <>
      <Tags tag={tag} setTag={setTag} />
      <LayoutGaleria>
        <GaleriaContainer>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                key={foto.id}
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </GaleriaContainer>
        <Populares />
      </LayoutGaleria>
    </>
  );
};

export default Galeria;
