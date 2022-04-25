import styled from 'styled-components'

export const FeedBackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    h1{
        display: flex;
        justify-content: center;
        font-weight:500;
    }

    .center{
        display: flex;
        justify-content: center;
        margin-bottom:2rem;
    }

    
`

export const FeedBackContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:6rem 0;

    div{
        margin:2rem 0;
    }

    span{
        color:#C8CFF7;
    }
    
    img{
        width: 260px;
        height: 60px;
        display: block;
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){  
        flex-direction:column;
        text-align: center;

        img{
            display: flex;
            width: 100%;
        }
}


    
`
