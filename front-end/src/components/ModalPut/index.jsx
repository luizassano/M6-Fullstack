import { Container } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ModalPut = ({ setModalPut }) => {
  const close = () => {
    return setModalPut(false);
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("@resgiterMe:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const itemToChange = localStorage.getItem("@resgiterMe:clickedItem");
    setModalPut(false);
    api
      .patch(`/associate/${itemToChange}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Contato atualizado.");
      })
      .catch((err) => {
        toast.error("Ops!! Algo deu errado.");
      });
  };
  return (
    <>
      <Container>
        <div>
          <h4>Editar contato</h4>
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
            type="number"
            name="telefone"
            placeholder="xxxx-xxxx"
            label="Telefone"
          />
          <Input
            register={register}
            name="email"
            placeholder="Digite aqui o email"
            label="Email"
          />

          <Button type="submit">Atualizar contato</Button>
        </form>
      </Container>
    </>
  );
};

export default ModalPut;