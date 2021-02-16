import styled from 'styled-components';

import Select from 'react-select'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`

export const HighestIndiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`;

export const HighestIndiceHeader = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

export const HighestIndiceContent = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 15px;
`;

export const HighestIndiceWrapper = styled.div<{color?: string}>`
    background-color: #ffffff;
    padding: 10px 20px;
    border: 1x solid #c9c9c9;
    border-bottom: 5px solid ${props=>(props.color ? props.color : 'black' )};
    border-top: 5px solid ${props=>(props.color ? props.color : 'black' )};

    & > label {
        font-weight: bold;
        display: block;
    }

    & > span {

    }
`;

export const Info = styled.div`
    color: #721c24;
    background-color: #f0f7fb;
    border: solid 1px #3498db;
    border-radius: 6px;
    line-height: 18px;
    padding: 15px 60px;
`

export const FormContainer = styled.div`
    width: 350px;
    height: auto;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const FormHeader = styled.div`
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0px;
`

export const StateSelect = styled(Select)`
    width: 100%;
    max-width: 190px;
`