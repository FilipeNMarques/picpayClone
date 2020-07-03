import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
   Wrapper,
   Header,
   BalanceContainer,
   BalanceTitle,
   Balance,
   PromoButtons,
   Container
  } from './styles'

const Home = () => {
  return (
    <Wrapper>
     <Container>
      <Header>
          <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e' />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
            <PromoButtons>
              <AntDesign name='gift' size={30} color='#10c86e' style={{marginRight: 10}}/>
              <MaterialCommunityIcons name='file-percent' size={30} color='#10c86e' />
            </PromoButtons>
        </Header>
     </Container>
    </Wrapper>
  )
}


export default Home