import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/RotaCadastroCSS";
import logo from "../assets/img/logo.png";
import {useNavigate, Link } from "react-router-dom";
import { urlAPI, urlRegister } from "../Constants/API";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";

export default function Rota() {

    const {user, setUser} = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);
    const [buttonText, setButtonText] = useState(<p>{"Cadastrar"}</p>);

    function DataRegister(e) {
        e.preventdefault();
        const body = { email, name, image, password }
        const reqRegister = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        reqRegister.then(() => navigate("/habitos"))
        reqRegister.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
            setButtonText(<p>{"Cadastrar"}</p>)
        })
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
        setUsage(true)
        setUser({email: email, name: name, password: password, image: image})
    }


    return (
        <Body>
            <Logo src={logo}></Logo>
            <form onSubmit={DataRegister}>
                <input
                    value={email}
                    type="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={password}
                    type="password"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={name}
                    type="text"
                    placeholder="nome"
                    onChange={e => setName(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    type="url"
                    placeholder="foto"
                    onChange={e => setImage(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>{buttonText}</p>
                </button>
            </form>
            <Link to="/"><p>Já tem uma conta? Faça Login!</p></Link>
        </Body>
    );
}
