import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled"
import { FeedBackContainer, FeedBackContent } from "./styles/Feedback.styled";

export const Feedback = () => {
  return (
    <FeedBackContainer>
      <Container>
        <h1>What others say</h1>
          <FeedBackContent>
                <div>
                    <span>september 2019</span>
                    <img src="./images/wired-removebg-preview.png" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio necessitatibus explicabo rerum doloremque ipsam? Id quibusdam vitae ipsa praesentium hic!</p>
                </div>
                <div>
                    <span>september 2019</span>
                    <img src="./images/la_times-removebg-preview.png" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio necessitatibus explicabo rerum doloremque ipsam? Id quibusdam vitae ipsa praesentium hic!</p>
                </div>
                <div>
                    <span>september 2019</span>
                    <img src="./images/refine-removebg-preview.png" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio necessitatibus explicabo rerum doloremque ipsam? Id quibusdam vitae ipsa praesentium hic!</p>
                </div>
         </FeedBackContent>
         <Button bg="#80C138">GET STARTED</Button>
       </Container>
     </FeedBackContainer>

  )
};
