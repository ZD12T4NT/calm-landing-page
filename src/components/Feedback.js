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
                    <p>"Calm is an app with meditations for every possible scenario. There are meditations for walking, ones for acute anxiety, ones to help you sleep, ones to help you concentrate."</p>
                </div>
                <div>
                    <span>september 2019</span>
                    <img src="./images/la_times-removebg-preview.png" alt="" />
                    <p>"Today, the 'sleep' tab on Calm features exclusive hour long compositions from alt-rock instrumental stars Moby and Sigur Rós, among soporific New Age-y playlists like 'Chasing Wonder,' 'Healing Piano' and 'Sleep Like a Baby.'"</p>
                </div>
                <div>
                    <span>september 2019</span>
                    <img src="./images/refine-removebg-preview.png" alt="" />
                    <p>"The aptly names Calm app is a firm faviourite in the Refinery29 offices - it gives you guided meditations, calming music and gentle stretching exercises to help you center yourself and stop your brain whirring so much."</p>
                </div>
         </FeedBackContent>
         <div className="center">
           <Button bg="#80C138">GET STARTED</Button>
         </div>
       </Container>
     </FeedBackContainer>

  )
};
