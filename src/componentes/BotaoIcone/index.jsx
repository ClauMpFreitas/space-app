import styled from "styled-components";

const BotaoIcone = styled.button`
  align-items: center;
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  height: 24px;
  justify-content: center;
  padding: 0;
  width: 24px;

  @media screen and (max-width: 1024px) {
    align-items: end;
    height: 16px;
    width: 16px;

    img {
      height: 14px;
      width: 14px;
    }
  }
`;

export default BotaoIcone;
