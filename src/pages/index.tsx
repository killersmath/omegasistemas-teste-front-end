import React, {useEffect, useState} from 'react';

import {Container, FormContainer} from './style';

//import { fetchEstados } from 'api/ibge';
//import { IState } from 'types/city'

import { withRouter, RouteComponentProps } from 'react-router-dom';

const IndexApp: React.FC<RouteComponentProps> = ({ history }) => {
    const [currentValue, setCurrentValue] = useState<string>('');
    /*
    const [autoCompleteData, setAutoCompleteData] = useState<IState[]>([]);

    useEffect(() => {
        (async () => {
            const statesData = await fetchEstados();;
            setAutoCompleteData(statesData);
        })();
    },[]);
    */

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        history.push('/estados/' + currentValue);
    }

    return (
        <Container>

            <FormContainer>
                <div>
                    Consultar Indice de Covid-19
                </div>
                <form onSubmit={onSubmit} method="post">
                    <label>
                        Buscar Estado
                    </label>
                    <input type="text" 
                        value={currentValue}
                        onChange={(e) => {
                            setCurrentValue(e.target.value);
                        }}/>
                    <input type="submit" value="Consultar"/>
                </form>
            </FormContainer>
        </Container>
    );
}

export default withRouter(IndexApp);