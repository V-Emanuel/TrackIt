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
        e.preventDefault();
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
        const body = { email, name, image, password }
        const promise = axios.post(`${urlAPI}${urlRegister}`, body)
        promise.then((res) => {
            navigate("/habitos")
            console.log(res)})
        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
            setButtonText(<p>{"Cadastrar"}</p>)
        })

    }


    return (
        <Body>
            <Logo src={logo}></Logo>
            <form onSubmit={DataRegister}>
                <input
                    data-test="email-input"
                    value={email}
                    type="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="password-input"
                    value={password}
                    type="password"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="user-name-input"
                    value={name}
                    type="text"
                    placeholder="nome"
                    onChange={e => setName(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    onChange={e => setImage(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage} data-test="signup-btn">
                    {buttonText}
                </button>
            </form>
            <Link to="/" data-test="login-link"><p>Já tem uma conta? Faça Login!</p></Link>
        </Body>
    );
}
