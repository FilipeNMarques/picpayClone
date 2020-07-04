import React from "react";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";
import avatar from "../../../assets/images/avatar.png";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@FilipeNmarques</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Fulanim de Tals</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 238,00</Value>
            <Divider />
            <Feather name="lock" color="#fff" size={14} />
            <Date>Há 2 semanas</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
