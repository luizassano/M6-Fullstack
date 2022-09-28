import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 300px;
  min-height: 300px;
  max-height: 400px;
  border-radius: 4px;
  background: var(--darkgrey);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  > div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--greycolor);
    border-radius: 4px 4px 0px 0px;

    p {
      font-size: 14px;
      margin-left: 10px;
    }
    button {
      width: 32px;
      height: 32px;
      background-color: var(--greycolor);
      color: var(--white);
      border: none;
      font-weight: 600;
      margin: 0;
      :hover {
        cursor: pointer;
        background-color: var(--greycolor);
        color: var(--white);
      }
    }
  }
  form {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 12px;
    margin: 5px;

    input {
      width: 250px;
    }
    select {
      width: 268px;
    }
    label {
      margin-left: -155px;
      margin-bottom: -8px;
    }
    button {
      background-color: var(--teal);
      color: var(--black);
    }
  }
  @media (min-width: 1010px) {
    top: 25%;
    left: 35%;
  }
`;