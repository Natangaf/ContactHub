import { styled } from 'styled-components';

export const StyledFormRegister = styled.form`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-gray-1);
    border-radius:5px 5px 0 0 ;
    span{
        width: 80%;
        color: red;
        height: 20px;
    }
    @media(min-width:600px){
        justify-content: center;
    }
    @media(min-width:1000px){
        width: 100%;
        height: 80%;
    }
`