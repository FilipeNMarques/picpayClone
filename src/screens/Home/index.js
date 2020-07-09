import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

// Components
import Suggestions from "../../components/Suggestinos";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  PromoButtons,
  Container,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <PromoButtons>
            <AntDesign
              name="gift"
              size={30}
              color="#10c86e"
              style={{ marginRight: 10 }}
            />
            <MaterialCommunityIcons
              name="file-percent"
              size={30}
              color="#10c86e"
            />
          </PromoButtons>
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
