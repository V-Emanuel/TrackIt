import styled from "styled-components";
import{React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Components/Rota";
import Cadastro from "./Components/Cadastro";

export default function App() {
  return (
    <Body>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rota/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;