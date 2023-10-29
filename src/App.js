import React from "react";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  Input,
  InputLabel,
  Button,
  User,
} from "./styles";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

const App = () => {
  const users = [
    { id: Math.random(), name: "Rodolfo", age: 28 },
    { id: Math.random(), name: "Marcos", age: 33 },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo"/></button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
