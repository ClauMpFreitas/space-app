import { styled } from "styled-components";

const BotaoIcone = styled.button`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export default BotaoIcone;
