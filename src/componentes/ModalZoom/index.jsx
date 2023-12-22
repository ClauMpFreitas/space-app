import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
  position: fixed;
`;

const ModalEstilizado = styled.dialog`
  background: none;
  border: none;
  max-width: 1156px;
  padding: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 80.25vw;

  form > button {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  @media screen and (max-width: 1024px) {
    width: 93.5vw;

    figure {
      h3,
      h4 {
        line-height: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      h4 {
        font-size: 1rem;
      }
    }

    button {
      height: 24px;
      width: 24px;

      & > img {
        height: 22px;
        width: 22px;
      }
    }
  }

  @media screen and (max-width: 743px) {
    width: 86.65vw;

    figure {
      max-width: unset;

      h3 {
        font-size: 1rem;
      }
      h4 {
        font-size: 0.875rem;
      }
    }

    button {
      & > img {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <ModalEstilizado open={foto} onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <BotaoIcone>
                <img src="/icones/fechar.svg" alt="Ícone de fechar" />
              </BotaoIcone>
            </form>
          </ModalEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
