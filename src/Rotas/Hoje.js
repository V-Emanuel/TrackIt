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
            <Habit></Habit>
        </Menu>
        <Footer/>
        </>
    );
}

const Habit = styled.div`
    
`;