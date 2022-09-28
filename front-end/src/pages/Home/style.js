import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  @media (min-width: 1010px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px 4px rgba(8, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      color: var(--green);
    }
  }
  img {
    width: 400px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    

    button {
      width: 150px;
      height: 50px;
      
    }

    @media (min-width: 1010px) {
      flex-direction: column;
      button + button {
      }
      img {
        width: 800px;
      }
    }
  }
`;