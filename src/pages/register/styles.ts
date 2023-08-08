import { styled } from "styled-components";

export const StyleRegister = styled.div`
    .container{
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    section{
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width: 100%;
        height: auto;
    }
    .footer{
        width: 100%;
        height: 10%;
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
            width: 90%;
            height: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
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
        section{
            width: 60%;
            height: 80%;
        }
    }
`