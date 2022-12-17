import styled from "styled-components";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rotas/Rota";
import Cadastro from "./Rotas/Cadastro";
import Habitos from "./Rotas/Habitos";

import UserContext from "./contexts/UserContext";
import HabitContext from "./contexts/HabitContext";

export default function App() {

  const [user, setUser] = useState({
    email: "",
    name: "",
    image: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    password: ""
  })
  const [habit, setHabit] = useState({
    name: "",
    days: []
  })


  return (
    <Body>
      <UserContext.Provider value={{ user, setUser}}>
      <HabitContext.Provider value={{habit, setHabit}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rota />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
          </Routes>
        </BrowserRouter>
        </HabitContext.Provider>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;