import styled from "styled-components";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Components/Rota";
import Cadastro from "./Components/Cadastro";

import UserContext from "./contexts/UserContext";

export default function App() {

  const [user, setUser] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  })

  return (
    <Body>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rota />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;