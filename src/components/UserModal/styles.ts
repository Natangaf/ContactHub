import { styled } from "styled-components";

export const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 300px;
    height: 60%;
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
    width: 90%;
    height:8
    0%;
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

  div {
    display: flex;
    gap: 22px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .btnSave {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 48px;
    cursor: pointer;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  .btnSave:hover {
    background-color: #ff577f;
    transition: 1s ease;
  }

  .btnDelete {
    bottom: 16px;
    right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    width: 98px;
    height: 48px;
    cursor: pointer;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
  .btnDelete:hover {
    color: #121214;
    transition: 1s ease;
  }
   @media (min-width: 600px) {
    width: 90%;
    height: 40%;
  }
    @media (min-width: 1000px) {
    width: 40%;
    height: 50%;
  }
`;

export const BackGround = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
`;
