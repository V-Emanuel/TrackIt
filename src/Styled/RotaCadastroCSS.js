import styled from "styled-components";

export const Logo = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
    width: 180px;
`;
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 6px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        padding-left: 20px;
        &:placeholder-shown{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            padding-left: 20px;
            color: #DBDBDB;
        }
        &:hover{
            background-color: #DBDBDB;
        }
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: #00BFFF;
        margin-bottom: 25px;
        p{
            text-decoration: none;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 21px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;

        }
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;