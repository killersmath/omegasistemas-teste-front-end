import React, {useEffect, useState} from 'react';

import {Container, FormContainer, 
        FormHeader, Form, FormGroup,
        FormLabel, FormInput,
        StateSelect } from './style';

import { fetchStatesData } from 'api/ibge';
import { IState } from 'types/city'

import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IOptionsData {
    value: string;
    label: string;
}


const IndexApp: React.FC<RouteComponentProps> = ({ history }) => {
    const [stateOptions, setStateOptions] = useState<IOptionsData[]>([]);

    useEffect(() => {
        (async () => {
            const statesData : IState[] = await fetchStatesData();
            setStateOptions(statesData.map((state) => 
                                                ({ value: state.sigla, label: state.nome} as IOptionsData)
                            ));
        })();
    },[setStateOptions]);

    const onStateSelected = (option: IOptionsData) => {
        history.push('/estado/' + option.value);
    }

    return (
        <Container>
            <FormContainer>
                <FormHeader>
                    Consultar Indice de Covid-19 do Estado
                </FormHeader>
                <StateSelect 
                    options={stateOptions}
                    onChange={onStateSelected}
                />
            </FormContainer>
        </Container>
    );
}

export default withRouter(IndexApp);