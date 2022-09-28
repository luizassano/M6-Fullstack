import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { Container, Content } from "./style";

const Home = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <img src={logo} />

        <div>
          <Button onClick={() => handleNavigation("/login")} greenSchema>
            {" "}
            Entrar{" "}
          </Button>
          <Button onClick={() => handleNavigation("/singup")}> Fazer Cadastro </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;