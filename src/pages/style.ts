import styled from 'styled-components';

import Select from 'react-select'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const FormContainer = styled.div`
    width: 350px;
    height: 350px;
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

export const Form = styled.form`
`

export const FormGroup = styled.div`
    width: 150px;
`

export const FormLabel = styled.label`
`

export const FormInput = styled.input`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    padding: 5px 5px;
    background: #ffffff;
    outline: none;
`

export const StateSelect = styled(Select)`
    width: 100%;
    max-width: 190px;
`