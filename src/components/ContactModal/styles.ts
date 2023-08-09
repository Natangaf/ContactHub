import { styled } from "styled-components";

export const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 300px;
    height: 70%;
    background: var(--color-gray-1);
    box-shadow: 0px 4px 40px -10px var(--color-back-modal);
    border-radius: 4px;
    justify-content: center;
  .containerheaderContactModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 80%;
    background: var(--color-gray-1);
    border-radius: 4px 4px 0px 0px;
  }
  .closeBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    background-color: transparent;
    border: none;
    cursor: pointer;

    color: #868e96;
  }
  h1 {
    font-size: 20px;
    line-height: 24px;
    color: var(--color-Primary);
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:90%;
    gap:10px;
  }

  label {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-Primary);
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10.15px;
    width: 100%;
    height: 37px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: #ffffff;
  }

  .buttonSubmit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 10.15px;
    width: 100%;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  .buttonSubmit:hover {
    background-color: #121214;
    color: #ff577f;
    border: #ff577f;
    transition: 1s ease;
  }

  @media (min-width: 600px) {
    width: 90%;
    height: 40%;
  }
    @media (min-width: 1000px) {
    width: 40%;
    height: 40%;
  }
`;

export const BackGround = styled.div`
  background: var(--color-back-modal);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
`;
