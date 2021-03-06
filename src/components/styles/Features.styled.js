import styled from 'styled-components'

export const FeaturesContainer = styled.div`
    min-height: 100vh;
    margin-top:6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FeaturesContent = styled.div`
    display: flex;

    div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:nth-child(4){
        display: flex;
        justify-content: center;
        align-items: center;
    }

   

.column{
    display: flex;
    flex-direction:column;
    width: 450px;

    h2{
        font-weight: 500;
        margin: 0;
    }
}
ul{
    list-style-type:none;
    display: grid;
    grid-template-columns:repeat(1, 1fr);


    li{
        margin: 0;
        font-size:1rem;
        color:rgba(0,0,0,0.6);

        h3{
        font-weight:600;
        color:#000;
        }
    }

    i{
       font-size:1.7rem;
       color:#fff;
       margin-right: 30px;
       padding: 10px ;
       border-radius:50%;
    }


    div:nth-of-type(1){
        i:nth-of-type(1){
        background: rgb(238,174,202);
        background: linear-gradient(112deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        }
    }

    div:nth-of-type(2){
        i:nth-of-type(1){
        background: rgb(62,9,121);
        background: linear-gradient(114deg, rgba(62,9,121,1) 0%, rgba(38,8,111,1) 0%, rgba(66,0,255,1) 100%);
     }
    }

    div:nth-of-type(3){
        i:nth-of-type(1){
            background: rgb(34,193,195);
            background: linear-gradient(140deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
        }
    }

    div:nth-of-type(4){
        i:nth-of-type(1){
            background: rgb(253,29,29);
            background: linear-gradient(162deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
        }
    }

}


    img{
        width: 320px;
        margin-right:2.5rem;
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){  
        img{
            display:none;
        }
}
`
