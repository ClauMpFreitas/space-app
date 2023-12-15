import styled from "styled-components";
import facebook from "../../../public/imagens/sociais/facebook.svg";
import instagram from "../../../public/imagens/sociais/instagram.svg";
import twitter from "../../../public/imagens/sociais/twitter.svg";

const FooterBox = styled.footer`
  display: flex;
  max-width: 100%;
  height: 30px;
  flex-shrink: 0;
  padding: 40px 30px;
  align-items: center;
  justify-content: space-between;
  background: #04244f;
  margin-top: 73px;

  @media screen and (max-width: 720px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const IconeBox = styled.div`
  display: flex;
  height: 22px;
  align-items: center;
  gap: 22px;

  @media screen and (max-width: 720px) {
    align-items: flex-start;
  }
`;
const Credito = styled.text`
  font-family: "GandhiSansRegular";
  align-items: end;
  color: #fff;
  text-align: right;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 720px) {
    text-align: center;
    font-size: 25px;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <IconeBox>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </IconeBox>
      <Credito>Desenvolvido por Cláudia</Credito>
    </FooterBox>
  );
};

export default Footer;
