import styled from "styled-components";
import React from "react";
import Topo from "../Components/Topo";
import Footer from "../Components/Footer";
import { Menu } from "../Styled/Menu";


export default function Hoje() {
    return (
        <>
        <Topo/>
        <Menu>
            <Title>
                <h1>Domingão, 17/05</h1>
                <h2>Nenhum hábito ainda concluído</h2>
            </Title>
            <Habit>
                <p>
                    <h1>Ler cap 1 do Livro</h1>
                    <h2>Sequência atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </p>
                <div><ion-icon name="checkmark-outline"></ion-icon></div>
            </Habit>
        </Menu>
        <Footer/>
        </>
    );
}

const Title = styled.p`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    box-sizing: border-box;
    margin-top: 28px;
    padding-left: 17px;
    h1{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 5px;
    }
    h2{
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`;
const Habit = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 13px 13px 0px 15px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        h1{
            font-size: 20px;
            line-height: 25px;
            color: #666666;
            margin-bottom: 7px;
        }
        h2{
            font-size: 13px;
            line-height: 16px;
            color: #666666;
        }
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 69px;
        height: 69px;
        background: #8FC549;
        border-radius: 5px;
        ion-icon{
            color: white;
            font-size: 60px;
            --ionicon-stroke-width: 50px;
        }
    }
`;