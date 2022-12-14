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
        <button><p>Entrar</p></button>
        </form>
        <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Body>
    );
}