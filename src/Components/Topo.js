import styled from "styled-components";
import {React, useContext} from "react";
import UserContext from "../contexts/UserContext";

export default function Topo() {

    const {user} = useContext(UserContext);

    return (
        <Header>
            <p>TrackIt</p>
            <img src={user.image}></img>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: white;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
;
`;