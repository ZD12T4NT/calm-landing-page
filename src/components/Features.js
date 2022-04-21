import React from "react";
import { Button } from "./styles/Button.styled";
import { FeaturesContainer, FeaturesContent } from "./styles/Features.styled";
import { Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled"

export const Features = () => {
  return (
      <FeaturesContainer>
          <Container>
             <FeaturesContent>
                <div>
                <Image src="./images/calm-2-removebg-preview.png" />
                </div>
                <div className="column">
                    <h2>What do you get?</h2>
                <ul>
                    <div>
                    <i class="fa-solid fa-moon"></i>
                    <li> 
                    <h3>Sleep Stories</h3>
                      Ever-growing library of Sleep Stroeis designed to lull you into a deep and restful slumber.</li>
                    </div>
                    
                    <div>
                    <i class="fa-solid fa-circle-dot"></i>
                    <li>
                    <h3>Sleep Stories</h3>
                      Hundreds of hours of guided meditation covering topics like stress, anxiety and relationships.</li>
                    </div>

                    <div>
                    <i class="fa-solid fa-music"></i>
                    <li>
                    <h3>Sleep Stories</h3>
                      Exclusive music for focus, relaxation and sleep, including Moby, Above & Beyond and Sigur Rós.</li>
                    </div>

                    <div>
                    <i class="fa-solid fa-sun"></i>
                    <li>
                    <h3>Sleep Stories</h3>
                      Breathing exercises, stretching programs, life-changing Masterclasses and more tools for a happy, healthy life.</li>
                    </div>
                </ul>
                <Button bg="#80C138">TRY CALM FOR FREE</Button>
                </div>
              </FeaturesContent>
            </Container>
      </FeaturesContainer>
  )
};
