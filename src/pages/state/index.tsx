import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import { Container, InfoHeader, InfoContainer, InfoWrapper } from './style';
import { fetchCovidData } from 'api/covid'

interface ParamTypes {
    sigla: string;
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

const StatePage: React.FC = () => {
    const { sigla } = useParams<ParamTypes>();
    const [ covidData, setCovidData ] = useState<ICovidData>();

    useEffect(() => {
        (async () => {
            const data = await fetchCovidData(sigla);
            setCovidData(data);
        })()
    }, []);
    
    return (
        <Container>
            <InfoHeader>
                Informações do estado {sigla}
            </InfoHeader>
            <InfoContainer>
                <InfoWrapper borderColor={'green'}>
                    <p>Confirmados</p>
                    <span>{covidData ? covidData.cases : 0}</span>
                </InfoWrapper>
                <InfoWrapper borderColor={'blue'}>
                    <p>Suspeitos</p>
                    {covidData ? covidData.suspects : 0}
                </InfoWrapper>
                <InfoWrapper borderColor={'red'}>
                    <p>Negados</p>
                    {covidData ? covidData.refuses : 0}
                </InfoWrapper>
                <InfoWrapper borderColor={'black'}>
                    <p>Mortes</p>
                    {covidData ? covidData.deaths : 0}
                </InfoWrapper>
            </InfoContainer>
        </Container> 
        )
}

export default StatePage;