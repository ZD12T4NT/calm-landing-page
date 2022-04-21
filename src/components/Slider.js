import React from "react";
import { Carousel, CarouselItems } from "./styles/Carousel.styled";
import { Container } from "./styles/Container.styled";


export const Slider = () => {
  return (
      <Container>
          <Carousel>
              <CarouselItems>
                    <div>
                        <img src="./images/calm-moon-removebg-preview.png" alt="" />
                    </div>
                    <div><h2>Drift off with sleep Storues narrated by iconic voices</h2>
                      <span>
                        Sienna the Sleepy Sloth
                      </span>
                      <p>Join bestselling author and beloved comedian David Walliams for a sleep adventure through an enchanting rainforest</p>
                      <div>
                          <img src="" alt="" />
                          <span>David Walliams</span>
                      </div>
                    </div>
              </CarouselItems>

              <CarouselItems>
                    <div>
                        <img src="./images/calm-moon-removebg-preview.png" alt="" />
                    </div>
                    <div><h2>Drift off with sleep Storues narrated by iconic voices</h2>
                      <span>
                        Sienna the Sleepy Sloth
                      </span>
                      <p>Join bestselling author and beloved comedian David Walliams for a sleep adventure through an enchanting rainforest</p>
                      <div>
                          <img src="" alt="" />
                          <span>David Walliams</span>
                      </div>
                    </div>
              </CarouselItems>

              <CarouselItems>
                    <div>
                        <img src="./images/calm-moon-removebg-preview.png" alt="" />
                    </div>
                    <div><h2>Drift off with sleep Storues narrated by iconic voices</h2>
                      <span>
                        Sienna the Sleepy Sloth
                      </span>
                      <p>Join bestselling author and beloved comedian David Walliams for a sleep adventure through an enchanting rainforest</p>
                      <div>
                          <img src="" alt="" />
                          <span>David Walliams</span>
                      </div>
                    </div>
              </CarouselItems>
          </Carousel>
      </Container>
  )
};
