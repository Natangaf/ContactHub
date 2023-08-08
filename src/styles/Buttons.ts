import styled, { css } from "styled-components";

interface InameButtons {
    nameButtons?: string;
}

export const StyledButtons = styled.button<InameButtons>`
cursor: pointer;
${({ nameButtons }) => {
        switch (nameButtons) {
            case "buttonsections":
                return css`
                height: 40px;
                width: 200px;
                background-color: var(--color-Primary);
                color: var(--color-second);
                font-size: 18px;
                border: transparent;
            `;
            case "buttonSend":
                return css`
                height: 40px;
                width: 200px;
                background-color: var(--color-Primary);
                color: var(--color-second);
                font-size: 14px;
                border: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        }
    }
    }`