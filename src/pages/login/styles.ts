import { styled } from "styled-components";

export const StyleLogin = styled.main`
    .container{
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    section{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width: 100%;
        height: auto;
    }
    form{
        width: 90%;
        height: 70%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap:5px;
        background-color: var(--color-gray-1);
        border-radius:5px 5px 0 0 ;
    }
    .signUp{
        width: 90%;
        height: 20%;
        display: flex;
        gap:5px;
        background: var(--color-gray-2);
        color: var(--color-Second);
        align-items: center;
        justify-content: center;
        border-radius:0 0 5px 5px ;
    }
    a{
        color: var(--color-Primary);
    }
    @media(min-width:600px){
        section{
            width: 100%;
            height: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        form{
            justify-content: center;
        }
    }
    @media(min-width:1000px){
        .container{
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        img{
            width: 40%;
        }
        form{
            height: 80%;
        }
    }
`