import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

export const InfoHeader = styled.div`
    display: block;
`

export const InfoContainer = styled.div`
    width: 450px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const InfoWrapper = styled.div<{borderColor?: string}>`
    width: 100px;
    height: 50px;
    background-color: #ffffff;
    border: 1x solid #c9c9c9;
    border-bottom: 5px solid ${props=>(props.borderColor ? props.borderColor : 'black' )};
    text-align: center;
`