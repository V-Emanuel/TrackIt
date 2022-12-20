import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {

    const [percentage, setPercentage] = React.useState(75);
    const navigate = useNavigate();
    return (
        <>
            <FooterDiv >
                <p onClick = {() => navigate("/habitos")}>Hábitos</p>
                <div onClick = {() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
                </div>
                <p>Histórico</p>
            </FooterDiv>
        </>
    );
}

const FooterDiv = styled.footer`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 36px;
    padding-right: 36px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        &:hover{
            cursor: pointer;
        }
    }
    .CircularProgressbar{
        width: 94px;
        &:hover{
            cursor: pointer;
        }
        margin-bottom: 20px;
    }
`;