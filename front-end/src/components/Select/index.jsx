import { Container, SelectContainer } from "./style";

function Select({ label, error, children, register, name, ...rest }) {
  return (
    <Container>
      <div>
        {" "}
        {label} {!!error && <span>-{error}</span>}
      </div>
      <SelectContainer isErrored={!!error} {...register(name)}>
        {children}
      </SelectContainer>
    </Container>
  );
}
export default Select;