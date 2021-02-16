import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const InfoHeader = styled.div`
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
`

export const InfoContainer = styled.div`
    width: 550px;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const InfoWrapper = styled.div<{borderColor?: string}>`
    width: 120px;
    background-color: #ffffff;
    padding: 10px 10px;
    border: 1x solid #c9c9c9;
    border-bottom: 5px solid ${props=>(props.borderColor ? props.borderColor : 'black' )};
`

export const InfoLabel = styled.p`
    font-weight: 600;
`

export const InfoData = styled.span`

`