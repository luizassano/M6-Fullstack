import { ButtonComponent } from "./styles";

const Button = ({ children, greenSchema = false, ...rest }) => {
  return (
    <ButtonComponent greenSchema={greenSchema} type="button" {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;