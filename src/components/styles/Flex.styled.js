import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    align-items: center;
    min-height:80vh;


    & > div,
    & > ul {
        flex:1;
    }

    
`
