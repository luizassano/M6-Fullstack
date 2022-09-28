import { toast } from "react-toastify";
import { ButtonsDiv, Container, DataDiv } from "./style";
import api from "../../services/api";
import Button from "../../components/Button";
import { BsTrash, BsPencil } from "react-icons/bs";

const Card = ({
  nome,
  telefone,
  email,
  registerId,
  itemToChange,
  setModalPut,
}) => {
  const token = JSON.parse(localStorage.getItem("@resgiterMe:token"));

  const deleteItem = (buttonId) => {
    api
      .delete(`/associate/${buttonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Contato deletado.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showModal = (event) => {
    localStorage.setItem("@resgiterMe:clickedItem", itemToChange);
    setModalPut(true);
  };

  return (
    <>
      {" "}
      <Container>
        <DataDiv>
          <h4>{nome}</h4>
          <div>
            <p> {email}</p>
            <p> {telefone}</p>
          </div>
        </DataDiv>
        <ButtonsDiv>
          <Button onClick={showModal} id={registerId}>
            <BsPencil />
          </Button>
          <Button onClick={() => deleteItem(itemToChange)} id={registerId}>
            <BsTrash />
          </Button>
        </ButtonsDiv>
      </Container>
    </>
  );
};

export default Card;