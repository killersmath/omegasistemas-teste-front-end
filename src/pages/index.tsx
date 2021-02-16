import React, {useEffect, useState} from 'react';

import {Container, FormContainer, 
        FormHeader, StateSelect, Info, 
        HighestIndiceContainer, HighestIndiceContent, HighestIndiceHeader, HighestIndiceWrapper } from './style';

import { fetchStatesData } from 'api/ibge';
import { fetchCovidData, fetchAllCovidData } from 'api/covid';


import { IState } from 'types/city';

import StateStatus from 'components/stateStatus';

import { withRouter, RouteComponentProps} from 'react-router-dom';

interface IOptionsData {
    value: string;
    label: string;
}

interface ICovidData {
    "uid": number,
    "uf": string,
    "state": string,
    "cases": number,
    "deaths": number,
    "suspects": number,
    "refuses": number,
    "datetime": string
}

const IndexApp: React.FC<RouteComponentProps> = ({ history }) => {
    const [stateOptions, setStateOptions] = useState<IOptionsData[]>([]);
    const [ currentUF, setCurrentUF ] = useState<string>('');

    const [ covidData, setCovidData ] = useState<ICovidData[]>();
    const [ selectedStateCovidData, setSelectedStateCovidData] = useState<ICovidData>();

    const [ highestConfirmedData, setHighestConfirmedData ] = useState<ICovidData>();
    const [ highestSuspectsData, setHighestSuspectsData ] = useState<ICovidData>();
    const [ highestRefusesData, setHighestRefusesData ] = useState<ICovidData>();
    const [ highestDeathsData, setHighestDeathsData ] = useState<ICovidData>();

    /**
     *  Fetch the data from ibge API
     *  The current data is transformed IState[] is transformed in IOptionsData[] 
     * 
     *  Finally he setStateOptions hook is called to redraw the page
     */
    useEffect(() => {
        (async () => {
            const statesData : IState[] = await fetchStatesData();
            setStateOptions(statesData.map((state) => 
                                                ({ value: state.sigla, label: state.nome} as IOptionsData)
                            ));
            const data : ICovidData[] = await fetchAllCovidData();
            setCovidData(data);

            let highestConfirmed : ICovidData | undefined = undefined;
            let highestSuspects : ICovidData | undefined = undefined;
            let highestRefuses : ICovidData | undefined = undefined;
            let highestDeaths : ICovidData | undefined = undefined;

            data.forEach((dataValue) => {
                if(!highestConfirmed)
                    highestConfirmed = dataValue;
                else if(highestConfirmed.cases < dataValue.cases)
                    highestConfirmed = dataValue;

                if(!highestSuspects)
                    highestSuspects = dataValue;
                else if(highestSuspects.suspects < dataValue.suspects)
                    highestSuspects = dataValue;
            
                if(!highestRefuses)
                    highestRefuses = dataValue;
                else if(highestRefuses.refuses < dataValue.refuses)
                    highestRefuses = dataValue;

                if(!highestDeaths)
                    highestDeaths = dataValue;
                else if(highestRefuses.deaths < dataValue.deaths)
                    highestDeaths = dataValue;
            })

            setHighestConfirmedData(highestConfirmed);
            setHighestSuspectsData(highestSuspects);
            setHighestRefusesData(highestRefuses);
            setHighestDeathsData(highestDeaths);
        })();
    }, []);

    const onStateSelected = async (option: IOptionsData) => {
        const data = await fetchCovidData(option.value);
        setCurrentUF(option.value);
        if(covidData) {
            const covidDataOfUF = covidData.find((data) => (data.uf === option.value));
            setSelectedStateCovidData(covidDataOfUF);
        }
    }

    return (
        <Container>
            {covidData && (<Info>Última Atualização: {covidData[0].datetime}</Info>)}
            <HighestIndiceContainer>
                <HighestIndiceHeader>Maiores taxas</HighestIndiceHeader>
                <HighestIndiceContent>
                    <HighestIndiceWrapper color={'green'}>
                        <label>{highestConfirmedData ? highestConfirmedData.cases : 0} Confirmados</label>
                        <span>{highestConfirmedData ? highestConfirmedData.state + ' - ' + highestConfirmedData.uf : 'Carregando'}</span>
                    </HighestIndiceWrapper>
                    <HighestIndiceWrapper color={'blue'}>
                        <label>{highestSuspectsData ? highestSuspectsData.suspects : 0} Suspeitos</label>
                        <span>{highestSuspectsData ? highestSuspectsData.state + ' - ' + highestSuspectsData.uf : 'Carregando'}</span>
                    </HighestIndiceWrapper>
                    <HighestIndiceWrapper color={'red'}>
                        <label>{highestRefusesData ? highestRefusesData.refuses : 0} Negativos</label>
                        <span>{highestRefusesData ? highestRefusesData.state + ' - ' + highestRefusesData.uf : 'Carregando'}</span>
                    </HighestIndiceWrapper>
                    <HighestIndiceWrapper color = {'black'}>
                        <label>{highestDeathsData ? highestDeathsData.deaths : 0} Mortes</label>
                        <span>{highestDeathsData? highestDeathsData.state + ' - ' + highestDeathsData.uf : 'Carregando'}</span>
                    </HighestIndiceWrapper>
                </HighestIndiceContent>
            </HighestIndiceContainer>

            <FormContainer>
                <FormHeader>
                    Consultar Indice de Covid-19 por Estado
                </FormHeader>
                <StateSelect 
                    options={stateOptions}
                    onChange={onStateSelected}
                    placeholder={'Selecionar Estado'}
                />
            </FormContainer>

            {selectedStateCovidData && (<StateStatus uf={currentUF} cases={selectedStateCovidData.cases} 
                                                    suspects={selectedStateCovidData.suspects} refuses={selectedStateCovidData.refuses} 
                                                    deaths={selectedStateCovidData.deaths} />)}
        </Container>
    );
}

export default withRouter(IndexApp);