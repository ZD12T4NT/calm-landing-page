import styled from 'styled-components'

export const CarouselBackground = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 16%, rgba(144,70,252,0.17552958683473385) 100%);
`

export const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    
`

export const CarouselItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
`

export const Arrow = styled.div`
     background: rgb(238,174,202);
     background: linear-gradient(112deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
       font-size:1.2em;
       color:#fff;
       padding: 10px ;
       border-radius:50%;
       cursor: pointer;
       width: 50px;

       display: flex;
       justify-content: center;
       align-items: center;
     
`
