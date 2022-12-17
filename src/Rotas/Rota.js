import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/RotaCadastroCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { urlAPI, urlLogin } from "../Constants/API";

export default function Rota() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    function DataLogin(e) {
        e.preventdefault();
        const reqLogin = axios.post(`${urlAPI}${urlLogin}`, {
            email: user.email,
            password: user.password
        })
        reqLogin.then(() => navigate("/habitos"))
    }

    return (
        <Body>
            <Logo src={logo}></Logo>
            <form onSubmit={DataLogin}>
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
                <button><p>Entrar</p></button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Body>
    );
}