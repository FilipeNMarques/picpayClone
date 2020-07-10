import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  TicketLabel,
  UseTicketContainer,
} from "./styles";

import creditCard from "../../../assets/images/credit-card.png";

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title> Saldo PicPay </Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "1356,22" : "••••••"}</Bold>
            </Value>
            <EyeButton onPress={handleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
                onPress={() => handleVisibility()}
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Teu saldo está rendendo 100% do CDI</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar seu saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre teu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre teu cartão para poder fazer pagamentos mesmo quando não
                tiver saldo no seu picpay
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>
        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <TicketLabel>Usar código promocional</TicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
