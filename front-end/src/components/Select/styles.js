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

export const SelectContainer = styled.select`
  background: var(--greycolor);
  border-radius: 5px;
  border: 1px solid var(--darkgrey);
  color: var(--lightgrey);
  padding: 1rem;
  width: 352px;
  display: flex;
  padding: 0;
  height: 38px;
  margin-top: 0;
  :hover {
    color: var(--white);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  option {
    background: var(--greycolor);
    flex: 1;
    border: 0;
    color: var(--lightgrey);
  }
`;