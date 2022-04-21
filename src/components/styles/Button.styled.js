import styled from 'styled-components'

export const Button = styled.button`
    background-color:${({ bg }) => bg || '#ADFF2F'};
    padding: 20px 40px;
    border: none;
    border-radius:25px;
    cursor: pointer;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.15);
    transition:all 0.3s ease-in-out;
    font-weight:700;
    color:${({ color }) => color || "#fff"};

    &:hover{
        opacity: 0.9;
        transform:scale(0.95);
    }
`
