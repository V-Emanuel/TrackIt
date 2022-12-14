import {React, useEffect, useState} from "react";
import axios from "axios";
import {Logo, Body} from "../Styled/RotaCadastroCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Rota(){
    return (
        <Body>
        <Logo src ={logo}></Logo>
        <form>
        <input placeholder="email"></input>
        <input placeholder="senha"></input>
        <input placeholder="nome"></input>
        <input placeholder="foto"></input>
        <button><p>Cadastrar</p></button>
        </form>
        <Link to="/"><p>Já tem uma conta? Faça Login!</p></Link>
        </Body>
    );
}
