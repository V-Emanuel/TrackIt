import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Topo from "../Components/Topo";
import HabitContext from "../contexts/HabitContext";
import TokenContext from "../contexts/TokenContext";
import Footer from "../Components/Footer";
import { Menu } from "../Styled/Menu";
import axios from "axios";

export default function Habitos() {

    const { token, setToken } = useContext(TokenContext);
    const { habit, setHabit } = useContext(HabitContext);
    const [showAdd, setShowAdd] = useState(false);
    const [idDays, setIdDays] = useState([]);
    const [renderHabit, setRenderHabit] = useState(<spam></spam>);
    const [renderHabits, setRenderHabits] = useState([]);
    const [apiHabit, setApiHabit] = useState([]);

    function DataHabit(e){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        e.preventDefault();
        setHabit({...habit, days: idDays});
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        const requisicao = axios.post(URL,{
            name: habit.name,
            days: idDays
        })

        useEffect( () => {
            const promise = axios.get(URL, config);
            promise.then((res) => {
                setApiHabit(res.data);
                console.log(res.data);
            });
            promise.catch((err) => {
                alert(err.response.data.message)
            });
        },[])
        SaveHabit(apiHabit)
    }

    function SaveHabit(hab){
        
        setRenderHabit(
        <><Habit>
            <h1 className="habitName">hab.name</h1>
            <WeekDays>
                {hab.map((item) => <div className="day notSelectedDay"><p>{item.days}</p></div>)}
            </WeekDays>
        </Habit></>
        )
        setRenderHabits({...renderHabits, renderHabit})
    }
    
    const week = [
        { id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" },
    ];
    
    function Selected(idDay) {
        const clicked = idDays.includes(idDay)
        if (!clicked){
            setIdDays([...idDays, idDay])
        } else {
            setIdDays(idDays.filter(a => a !== idDay))
        }
    }
    
    return (
        <>
            <Topo data-test="header"/>
            <Menu>
                <Tittle>
                    <p className="tittleAdd">Meus Hábitos</p>
                    <ion-icon name="add-circle" data-test="habit-create-btn" onClick={() => { setShowAdd(!showAdd)}}></ion-icon>
                </Tittle>
                <Add data-test="habit-create-container" show={showAdd}>
                    <form onSubmit={DataHabit}>
                        <input
                            data-test="habit-name-input"
                            type="text"
                            placeholder="nome do hábito"
                            onChange={e => setHabit({ ...habit, name: e.target.value })}
                            required>
                        </input>
                        <WeekDays>
                            {week.map((item) => <div data-test="habit-day"
                                className={` day ${idDays.includes(item.id) ? "selectedDay" : "notSelectedDay"}`}
                                onClick={() => { Selected(item.id)}}>
                                <p>{item.name}</p>
                            </div>)}
                        </WeekDays>
                        <Buttons>
                            <button data-test="habit-create-cancel-btn" className="cancel">
                                <p>Cancelar</p>
                            </button>
                            <button data-test="habit-create-save-btn" type="submit" className="save">
                                <p>Salvar</p>
                            </button>
                        </Buttons>
                    </form>
                    <>{renderHabits}</>
                </Add>
                <NoHabits>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</NoHabits>
            </Menu>
            <Footer data-test="menu"/>
        </>
    );
}

const NoHabits = styled.p`
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
const Habit = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 18px;
    margin-top: 10px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 5px;
    }
`;
const WeekDays = styled.div`
    display: flex;
    .day{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 4px;
        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
        }
        &:hover{
            cursor: pointer;
        }
    }
    .selectedDay{
        background-color: #CFCFCF;
        p{
            color:#FFFFFF;
        }
    }
    .notSelectedDay{
        background-color: #FFFFFF;
        p{
            color:#DBDBDB;
        }
    }
`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    button{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: #87CEEB;
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
