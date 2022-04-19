import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { HeaderBackground, HeaderStyle, Logo, Image } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled"

export const Header = () => {
  return (
      <HeaderBackground>
            <Container>
                <HeaderStyle>
                <Logo src='./images/calm-logo.png'/>
                </HeaderStyle>
                <Flex>
                    <div>
                    <h1>Meet Calm. the #1 app for sleep and meditation</h1>
                    <p>Join millions around the globe who are experiencing better sleep, lower stress and less anxiety.</p>
                <Button bg='#fff' color='#000'>GET STARTED</Button>
                    </div>
                    <Image src="./images/Group 2 (1).svg" alt="" />
                </Flex>
            </Container>
    </HeaderBackground>
    )
};
