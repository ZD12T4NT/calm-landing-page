import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 60vh;
    display: grid;
    grid-template-columns:repeat(1, 1fr);
    background-color:#717171;
    color:#fff;

    .copy{
        display: flex;
        justify-content: center;
        align-items: center;

        h3{
            font-size:15px;
            font-weight:500;
            color:#89898A;
        }
    }
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height:100%;
    gap:10rem;

    h2{
        font-weight:500;
    }

    ul{
    list-style-type:none;
    padding: 0;

         li{
        margin:20px 0;
        color:#bababa;
        

        }
    }

    div{
        text-transform:capitalize;
        margin-top:2rem;

        i{
            margin:35px 15px;
        }
    }

    

      
`
