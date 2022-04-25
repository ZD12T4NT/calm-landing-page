import React from "react";
import { Container } from "./styles/Container.styled";
import { FooterContainer, FooterContent } from "./styles/Footer.styled";

export const Footer = () => {
  return (
      <FooterContainer>
          <Container>
              <FooterContent>
                <div>
                    <h2>company</h2>
                    <ul>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                    </ul>
                </div>
                <div>
                    <h2>offers</h2>
                    <ul>
                        <li>buy a gift</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                    </ul>
                </div>
                <div>
                    <h2>help</h2>
                    <ul>
                        <li>FAQ</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                    </ul>
                </div>
              </FooterContent>
          </Container>
      </FooterContainer>
  )
};
