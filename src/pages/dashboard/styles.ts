import styled from "styled-components";

export const StyledDashboard = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .container{
      flex-direction: column;
      align-items: center;
    } 
    section{
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
    }
    .myContacts{
      background-color: var(--color-gray-2);
      width: 100%;
      color: var(--color-Primary);
      font-size: 40px;
      text-align: center;
      padding:20px 0;
    }
      .newContact{
        position: sticky;
        bottom: 5%;
      }
    .empty{
      width: 90%;
      height: 120px;
      background-color: var(--color-gray-1);
    }
    ul{
      margin-top:30px;
      height: 80%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      gap:20px;
      justify-content: flex-start;
      overflow-y: scroll;
    }
    ul::-webkit-scrollbar {
      width: 7px;               /* width of the entire scrollbar */
    }
    ul::-webkit-scrollbar-track {
      background: var(--color-gray-1);        /* color of the tracking area */
    }
    ul::-webkit-scrollbar-thumb {
      background-color: var(--color-Primary);   
    }
    @media(min-width:600px){
      .newContact{
        position: absolute;
        bottom: 10%;
        right: 10%;
      }
    }

`;