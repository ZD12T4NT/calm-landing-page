import React, { useState } from "react";
import { CarouselBackground, SliderContainer } from "./styles/Carousel.styled";
import { Container } from "./styles/Container.styled";
import content from "../content";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Flex } from "./styles/Flex.styled";


export const Slider = ({ slides, title, name, body, person }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
      <CarouselBackground>
          <Container>
             <SliderContainer>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {content.map((slide, index)=> {
                      return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                          {index === current && (
                            <Flex>
                              <img src={slide.image} alt="" />
                              <div className="column">
                              <h3>{slide.title}</h3>
                              <span>
                              {slide.name}
                              </span>
                              <p>
                              {slide.body}
                              </p>
                              <span>
                              {slide.person}
                              </span>
                              </div>
                            </Flex>
                          )}                
                        </div>
                      );
                    })}
              </SliderContainer>
           </Container>
      </CarouselBackground>
  )
};

