import styled from "styled-components";

export const StyledButtons = styled.button`
    cursor: pointer;
    height: 40px;
    width: 200px;
    background-color: var(--color-Primary);
    color: var(--color-back);
    font-size: 18px;
    border: transparent;
    
    &:disabled {
        cursor: not-allowed;
        background-color: var(--color-back);
        color:  var(--color-Primary);
    }
`