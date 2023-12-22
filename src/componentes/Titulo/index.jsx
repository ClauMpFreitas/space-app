import styled from "styled-components";

const Titulo = styled.h2`
  color: #7b78e5;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};

  @media screen and (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 743px) {
    font-size: 1.25rem;
    text-align: left;
  }
`;

export default Titulo;
