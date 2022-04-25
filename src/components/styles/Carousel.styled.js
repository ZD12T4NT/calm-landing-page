import styled from 'styled-components'

export const CarouselBackground = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 16%, rgba(144,70,252,0.17552958683473385) 100%);
`



export const SliderContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;

  .column{
    width: 400px;
  }

  img{
    width: 250px;
    border-radius:30px;
    margin-right:5rem;
  }

  @media only screen and (max-width:${({ theme }) => theme.mobile}){  

      text-align:center;

        img{
          display: none;
        }

        .column{
    width: 300px;
  }
}

 
  .right-arrow {
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: #EEAECA;
}

.left-arrow {
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: #EEAECA;
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
 
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08); 
}


`


