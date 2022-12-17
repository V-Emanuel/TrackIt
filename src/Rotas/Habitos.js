import { React, useContext, useState } from "react";
import styled from "styled-components";
import Topo from "../Components/Topo";
import HabitContext from "../contexts/HabitContext";
import Footer from "../Components/Footer";

export default function Habitos() {

    const [dayColor, setDayColor] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
    const week = [
        { id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" },
      ];
    const { habit, setHabit } = useContext(HabitContext);
    return (
        <>
            <Topo/>
            <Menu>
                <Tittle>
                    <p className="tittleAdd">Meus Hábitos</p>
                    <ion-icon name="add-circle"></ion-icon>
                </Tittle>
                <Add show={showAdd}>
                    <form>
                        <input
                            type="text"
                            placeholder="nome do hábito"
                            onChange={e => setHabit({ ...habit, name: e.target.value })}
                            required>
                        </input>
                        <WeekDays>
                            {week.map((item) => <Day cor={dayColor}><p>{item.name}</p></Day>)}
                        </WeekDays>
                        <Buttons>
                            <div className="cancel">
                                <p>Cancelar</p>
                            </div>
                            <div className="save">
                                <p>Salvar</p>
                            </div>
                        </Buttons>
                    </form>
                </Add>
                <p className="initialDescrition">Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</p>
            </Menu>
            <Footer/>
        </>
    );
}
const Menu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    .initialDescrition{
        width: 100%;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        word-wrap: wrap;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const Tittle = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    .tittleAdd{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    ion-icon{
        color: #126BA5;
        font-size: 40px;
        &:hover{
            cursor: pointer;
        }
    }
`;
const Add = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        padding-left: 10px;
        margin-bottom: 8px;
    }

`;
const WeekDays = styled.div`
    display: flex;
`;
const Day = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.cor ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: ${props => props.cor ? "#FFFFFF" : "#DBDBDB"};
    }

`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    div{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
        }
        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }
    }
    .cancel{
        background-color: white;
        p{
            color: #52B6FF;
        }
    }
    .save{
        margin-left: 5px;
        background-color: #52B6FF;
        p{
            color: white;
        }
    }
    
`;