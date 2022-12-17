import styled from "styled-components";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {

    const [percentage, serPescentage] = React.useState(75);
    return (
        <>
            <FooterDiv>
                <p>Hábitos</p>
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
    }
    .CircularProgressbar{
        width: 94px;
    }
`;