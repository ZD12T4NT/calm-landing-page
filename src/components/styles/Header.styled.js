import styled from 'styled-components'

export const HeaderBackground = styled.div`
    height:100vh;
    background: rgb(64,63,251);
    background: linear-gradient(180deg, rgba(64,63,251,1) 0%, rgba(144,70,252,1) 100%);
    line-height:1.4;



      h1{
            margin-top: 0;
            color:#fff;
            font-weight:500;
            width: 500px;
            font-size:3.3rem;
        }

        p{
            color:#fff;
            font-size:1.5rem;
            line-height:1.6;

         }


`

export const HeaderStyle = styled.div`
    height:100px;
    display: flex;
    align-items: center;

   
`

export const Logo = styled.img`
   width: 100px;
`

export const Image = styled.img`
    width:1200px;    
    transform:translate(10%, -3%);
`
