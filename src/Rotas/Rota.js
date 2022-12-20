import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/RotaCadastroCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import { urlAPI, urlLogin } from "../Constants/API";
import { ThreeDots } from 'react-loader-spinner';
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";

export default function Rota() {

    const { user, setUser } = useContext(UserContext);
    const { token, setToken } = useContext(TokenContext);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);
    const [buttonText, setButtonText] = useState(<p>{"Entrar"}</p>);

    function DataLogin(e) {
        e.preventDefault();
        const body = { email, password }
        const promise = axios.post(`${urlAPI}${urlLogin}`, body)
        promise.then((res) => {
            navigate("/habitos")
            setToken(res.data.token)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
            setButtonText(<p>{"Entrar"}</p>)
        })
        setUsage(true)
        setButtonText(
            <ThreeDots
                height="80"
                width="51"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />)
        setUser({ email: email, password: password })
    }


    return (
        <Body>
            <Logo src={logo}></Logo>
            <form onSubmit={DataLogin}>
                <input
                    value={email}
                    type="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={password}
                    type="password"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>{buttonText}</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Body>
    );
}