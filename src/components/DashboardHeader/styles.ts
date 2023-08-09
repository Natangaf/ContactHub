import { styled } from "styled-components";

export const Header = styled.header`
    height: 80px;
    width: 100%;
    background-color: var(--color-gray-1);
    .container-header{
        height:100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    img {
        height: 80%;   
    }
    button{
        cursor:pointer;
        height: 50px;
        width : 50px;
        background-color: var(--color-Primary) ;
        border:none;
        border-radius:50%;
        color:var(--color-black) ;
        font-size:20px;
    }

    nav{
        background-color: var(--color-gray-2);
        position: absolute;
        top:80px;
        right:0;
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:20px;
        
    }
    nav>button{
        background-color: transparent;
        width: 100%;
        color:var(--color-Primary) ;
        font-size:20px;
    }

    @media(min-width:1000px){
     nav{ 
        width: 10%;
        right:27%;
     }
    }
`;
