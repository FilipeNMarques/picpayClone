import React from "react";

import { Container, Details, Img, Title, Description } from "./styles";

import im13 from "../../../assets/images/13.png";

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre seus amigos</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças
        </Description>
      </Details>
      <Img source={im13} />
    </Container>
  );
};

export default Banner;
