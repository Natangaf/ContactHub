import { styled } from "styled-components";

export const ContactItem = styled.li`
  width: 70%;
  min-height: 8rem;
  background: var(--color-grey-3);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  color: #292929;

  &&:hover {
    background-color: var(--color-grey-2);
    transition: 1s ease;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    font-size: 2rem;
    width: 90%;
  }
`;
