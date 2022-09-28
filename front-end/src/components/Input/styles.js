import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 10px;
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: #e8f0fe;
  color: var(--white);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  padding: 0;
  height: 38px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  input {
    background: #e8f0fe;
    height: 38px;
    width: 100%;
    align-items: center;
    margin: 0px;
    padding: 0 10px;

  }
`;