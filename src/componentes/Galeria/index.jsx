import { styled } from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 24px;
`;

const Galeria = ({
  fotos = [],
  setTag,
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {
  return (
    <>
      <Tags setTag={setTag} /> -
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                key={foto.id}
                foto={foto}
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;