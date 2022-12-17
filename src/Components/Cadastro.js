import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/RotaCadastroCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { urlAPI, urlRegister } from "../Constants/API";

export default function Rota() {

    const { user, setUser } = useContext(UserContext);

    function DataRegister(e) {
        e.preventdefault();
        const reqRegister = axios.post(`${urlAPI}${urlRegister}`, {
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })  
    }

return (
    <Body>
        <Logo src={logo}></Logo>
        <form onSubmit={DataRegister}>
            <input
                value={user.email}
                type="email"
                placeholder="email"
                onChange={e => setUser({ ...user, email: e.target.value })}
                required>
            </input>
            <input
                value={user.password}
                type="password"
                placeholder="senha"
                onChange={e => setUser({ ...user, password: e.target.value })}
                required>
            </input>
            <input
                value={user.name}
                type="text"
                placeholder="nome"
                onChange={e => setUser({ ...user, name: e.target.value })}
                required>
            </input>
            <input
                value={user.image}
                type="url"
                placeholder="foto"
                onChange={e => setUser({ ...user, image: e.target.value })}
                required>
            </input>
            <button><p>Cadastrar</p></button>
        </form>
        <Link to="/"><p>Já tem uma conta? Faça Login!</p></Link>
    </Body>
);
}
