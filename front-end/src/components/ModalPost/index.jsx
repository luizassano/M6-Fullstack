import { ModalDiv } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ModalPost = ({ setModalPost }) => {
  const close = () => {
    return setModalPost(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@resgiterMe:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ nome, email, telefone, registerId }) => {
    const contato = {
      nome,
      email,
      telefone,
      registerId: JSON.parse(localStorage.getItem("@resgiterMe:user")),
    };

    api
      .post("/associate", contato, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Contato cadastrado com sucesso.");
        close();
      })
      .catch((err) => toast.error("Ops! Algo deu errado. Tente novamente"));
  };

  return (
    <>
      <ModalDiv>
        <div>
          <p>Cadastrar contato</p>
          <Button onClick={close}> x </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="nome"
            placeholder="Digite aqui o nome"
            label="Nome"
          />
          <Input
            register={register}
            name="telefone"
            placeholder="xx xxxx-xxxx"
            label="Telefone"
          />
          <Input
            register={register}
            name="email"
            placeholder="Digite aqui o email"
            label="Email"
          />

          <Button type="submit">Salvar contato</Button>
        </form>
      </ModalDiv>
    </>
  );
};

export default ModalPost;