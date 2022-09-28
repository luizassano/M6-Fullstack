import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1010px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
from{
    opacity:0;
    transform: translateX(-50px);
}
to{
    opacity:1;
    transform: translateX(0px)
}`;
export const DivMenu = styled.div`
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: var(--darkgrey);
    color: var(--white);
    width: 80px;
    border: none;
    margin: 10px;
    font-family: "Inter";
    font-size: 15px;
  }
  img {
    width: 200px;
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    width: 310px;
    background-color: #e8f0fe;
    border-radius: 5px;

    h1 {
      margin-bottom: 8px;
      color: #0a0416;
      text-align: center;
    }

    > div {
      margin-top: 16px;
      color: #0a0416;
    }

    label {
      margin: 10px;
    }
    button {
      margin-left: 10%;
      margin-bottom: 10%;
      width: 80%;
      background-color: #0a0416;
      border: none;
      color: white;
      font-size: 15px;
    }
    p {
      margin: 8px;
      text-align: center;
      font-size: 12px;
      color: var(--lightgrey);
    }
    .cadastre {
      background-color: var(--lightgrey);
    }
    @media (min-width: 1010px) {
      form {
        width: 370px;
      }
    }
  }
`;