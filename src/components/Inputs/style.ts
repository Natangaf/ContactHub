import styled from "styled-components";

export const StylesInputs = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    background-color: var(--color-gray-1);
    align-items: center;
    justify-content: center;
    gap:10px;
  svg{
    color:var(--color-Primary);
    width: 7%;
    height: auto;
  }
  input{
    height: 38px;
    width: 80%;
    background-color: transparent;
    outline: none;
    border: 0px transparent;
    border-left: 1px solid var(--color-Primary);
    color: white;
    padding-left:20px;
  }
  input::placeholder {
    color: var(--color-Primary);
    text-align: left;
  }
  @media(min-width:600px){
    svg{
      color:var(--color-Primary);
      width: 5%;
      height: auto;
    }
  }
  @media(min-width:1000px){
    svg{
      color:var(--color-Primary);
      width: 7%;
      height: auto;
    }
  }
`