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
                        <li>careers</li>
                        <li>press</li>
                        <li>blog</li>
                        <li>meet our instructor</li>
                    </ul>
                </div>
                <div>
                    <h2>offers</h2>
                    <ul>
                        <li>buy a gift</li>
                        <li>redeem a gift</li>
                        <li>groups of teams</li>
                        <li>calm health</li>
                    </ul>
                </div>
                <div>
                    <h2>help</h2>
                    <ul>
                        <li>FAQ</li>
                        <li>contact us</li>
                        <li>terms</li>
                        <li>privacy</li>
                        <li>cookies</li>
                    </ul>
                </div>
                <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
              </FooterContent>
          </Container>
          <div className="copy">
          <h3>Copyright &copy; 2022 Calm. All rights reserved</h3>
          </div>
      </FooterContainer>
  )
};
