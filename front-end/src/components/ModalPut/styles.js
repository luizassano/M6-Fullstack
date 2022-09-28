import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  min-height: 300px;
  max-height: 400px;
  border-radius: 4px;
  background: var(--darkgrey);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
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
    margin-bottom: 20px;

    p {
      font-size: 14px;
      margin-left: 10px;
    }
    h4 {
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
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12.182px;
    margin: 5px;

    select {
      width: 268px;
    }
    label {
      margin-left: -155px;
      margin-bottom: -8px;
    }
    button {
      height: 45px;
      background-color: var(--teal);
      border: none;
      color: var(--white);
    }
  }
  @media (min-width: 1010px) {
    top: 25%;
    left: 35%;
    position: absolute;
  }
  form {
    button {
      height: 65px;
      background-color: var(--teal);
      border: none;
      color: var(--white);
    }
  }
`;